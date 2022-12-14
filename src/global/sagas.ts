import axios from 'axios'
import {call, put, select, takeLatest, ForkEffect} from 'redux-saga/effects'
import {
  ACTION_CHANGE_DATE_FILTER_INTERVAL,
  ACTION_CHANGE_DATE_FILTER_MODE,
  ACTION_CHANGE_FILTERS_CONTINENT,
  ACTION_CHANGE_FILTERS_POPULATION,
  ACTION_CHANGE_GEOID_SELECTION,
  ACTION_CHANGE_GRAPH_MODE,
  ACTION_CHANGE_GRAPH_SCALE,
  ACTION_CHANGE_METRIC_GRAPH_VISIBILITY,
  ACTION_CHANGE_TOUR_STATE,
  ACTION_CHANGE_VIEW_MODE,
  ACTION_CLEAR_NOTIFICATION,
  ACTION_GET_DATA_FAIL,
  ACTION_GET_DATA_START,
  ACTION_GET_DATA_SUCCESS,
  ACTION_REPARSE_DATA,
  ACTION_SET_NOTIFICATION,
  ACTION_UPDATE_GEOID_VISIBILITY,
  DATE_FILTER,
  ROUTE_DASHBOARD,
  ROUTE_EMPTY_PARAM,
  URL_ELEMENT_SEPARATOR,
} from './constants'
import {history} from './store'
import {action} from './util'

const routingActions = [
  ACTION_CHANGE_DATE_FILTER_MODE,
  ACTION_CHANGE_DATE_FILTER_INTERVAL,
  ACTION_CHANGE_GEOID_SELECTION,
  ACTION_CHANGE_VIEW_MODE,
  ACTION_CHANGE_GRAPH_MODE,
  ACTION_CHANGE_GRAPH_SCALE,
  ACTION_CHANGE_METRIC_GRAPH_VISIBILITY,
  ACTION_CHANGE_FILTERS_CONTINENT,
]

function* getData() {
  try {
    yield put({type: ACTION_SET_NOTIFICATION, message: 'global:notification_loading', showSpinner: true})
    const result = yield call(axios.get, 'https://opendata.ecdc.europa.eu/covid19/casedistribution/json/')

    if (!result?.data?.records) {
      throw new Error('error.data_unavailable')
    }

    yield put({type: ACTION_GET_DATA_SUCCESS, result: result.data})
    yield put({type: ACTION_CLEAR_NOTIFICATION})

    const {isDeviceDesktop, tourCompleted} = yield select(state => ({
      isDeviceDesktop: state.theme.isDeviceDesktop,
      tourCompleted: state.overview.tourCompleted,
    }))
    if (isDeviceDesktop && !tourCompleted) {
      yield put({type: ACTION_CHANGE_TOUR_STATE, enabled: true})
    }
  } catch (e) {
    console.error(e)
    yield put({type: ACTION_GET_DATA_FAIL, error: e.message})
  }
}

function* changeUrl() {
  const urlParams = yield select(state => {
    const result: Record<string, string> = {
      viewMode: state.overview?.viewMode || ROUTE_EMPTY_PARAM,
      startDate: state.overview?.dateFilter?.startDate || ROUTE_EMPTY_PARAM,
      endDate: state.overview?.dateFilter?.endDate || ROUTE_EMPTY_PARAM,
      filtersContinent: state.overview?.filters?.continent?.join(URL_ELEMENT_SEPARATOR) || ROUTE_EMPTY_PARAM,
      filtersPopulation: state.overview?.filters?.population?.join(URL_ELEMENT_SEPARATOR) || ROUTE_EMPTY_PARAM,
      graphMode: state.graphOverview?.graphMode || ROUTE_EMPTY_PARAM,
      graphScale: state.graphOverview?.graphScale || ROUTE_EMPTY_PARAM,
      metricsVisible: state.graphOverview?.metricsVisible?.join(URL_ELEMENT_SEPARATOR) || ROUTE_EMPTY_PARAM,
    }

    // check if we have at least one selected geoId
    if (state.overview?.selectedGeoIds && Object.values(state.overview.selectedGeoIds).some(selected => !!selected)) {
      result.selectedGeoIds =
        Object.entries(state.overview.selectedGeoIds)
          .filter(([geoId, active]) => active)
          .map(([geoId, active]) => geoId)
          .sort()
          .join(URL_ELEMENT_SEPARATOR) || ROUTE_EMPTY_PARAM
    } else {
      result.selectedGeoIds = ROUTE_EMPTY_PARAM
    }

    if (state.overview?.dateFilter?.mode) {
      result.startDate = state.overview.dateFilter.mode
      result.endDate = state.overview.dateFilter.mode
    }

    return result
  })

  const route = Object.entries(urlParams).reduce(
    (parsedRoute, [paramName, paramValue]) => parsedRoute.replace(`:${paramName}?`, paramValue as string),
    ROUTE_DASHBOARD
  )

  if (history.location.pathname !== route) {
    history.push(route)
  }
}

export function* generalSaga(): Generator<ForkEffect<never>> {
  yield takeLatest(ACTION_GET_DATA_START, getData)
  yield takeLatest(routingActions, changeUrl)
  yield takeLatest([ACTION_GET_DATA_SUCCESS, ACTION_REPARSE_DATA], () =>
    action(ACTION_CHANGE_DATE_FILTER_MODE, {filterMode: DATE_FILTER.LAST_14_DAYS})
  )
  yield takeLatest(
    [ACTION_GET_DATA_SUCCESS, ACTION_REPARSE_DATA, ACTION_CHANGE_FILTERS_CONTINENT, ACTION_CHANGE_FILTERS_POPULATION],
    () => action(ACTION_UPDATE_GEOID_VISIBILITY)
  )
}
