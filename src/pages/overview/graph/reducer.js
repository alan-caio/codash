import {
  ACTION_CHANGE_ALL_METRIC_GRAPH_VISIBILITY,
  ACTION_CHANGE_GRAPH_MODE,
  ACTION_CHANGE_METRIC_GRAPH_VISIBILITY,
  GRAPH_MODE,
  METRICS,
} from '../../../global/constants'
import {graphMetricsOrder} from './Graphs'

const initialState = {
  graphMode: GRAPH_MODE.LINE,
  lineGraphVisible: true,
  barGraphVisible: false,
  metricsVisible: Object.values(METRICS),
}

export const graphOverview = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_CHANGE_GRAPH_MODE:
      let lineGraphVisible = true
      let barGraphVisible = false

      switch (action.graphMode) {
        default:
        case GRAPH_MODE.LINE:
          break
        case GRAPH_MODE.COMBO:
          barGraphVisible = true
          break
        case GRAPH_MODE.BAR:
          lineGraphVisible = false
          barGraphVisible = true
          break
      }
      return {
        ...state,
        graphMode: action.graphMode,
        lineGraphVisible: lineGraphVisible,
        barGraphVisible: barGraphVisible,
      }

    case ACTION_CHANGE_METRIC_GRAPH_VISIBILITY: {
      const newMetricsVisible = new Set([...state.metricsVisible])

      if (newMetricsVisible.has(action.metric)) {
        newMetricsVisible.delete(action.metric)
      } else {
        newMetricsVisible.add(action.metric)
      }

      return {
        ...state,
        metricsVisible: [...newMetricsVisible],
      }
    }

    case ACTION_CHANGE_ALL_METRIC_GRAPH_VISIBILITY: {
      let newMetricsVisible = []

      if (state.metricsVisible.length === 0) {
        newMetricsVisible = graphMetricsOrder
      }

      return {
        ...state,
        metricsVisible: newMetricsVisible,
      }
    }

    default:
      return state
  }
}