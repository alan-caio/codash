export const ASYNC_STATUS = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
}

export const DATE_FILTER = {
  TOTAL: 'TOTAL',
  LAST_DAY: 1,
  LAST_7_DAYS: 7,
  LAST_14_DAYS: 14,
  LAST_30_DAYS: 30,
  LAST_60_DAYS: 60,
}

export const VIEW_MODE = {
  COMBO: 'COMBO',
  TABLE: 'TABLE',
  GRAPHS: 'GRAPHS',
}

export const GRAPH_MODE = {
  COMBO: 'COMBO',
  LINE: 'LINE',
  BAR: 'BAR',
}

export const GRAPH_SCALE = {
  LINEAR: 'LINEAR',
  LOGARITHMIC: 'LOGARITHMIC',
}

export const METRICS = {
  CASES_NEW: 'cases',
  CASES_ACCUMULATED: 'casesAccumulated',
  CASES_PER_CAPITA: 'infectionPerCapita',
  CASES_PER_CAPITA_ACCUMULATED: 'infectionPerCapitaAccumulated',
  DEATHS_NEW: 'deaths',
  DEATHS_ACCUMULATED: 'deathsAccumulated',
  DEATHS_PER_CAPITA: 'mortalityPerCapita',
  DEATHS_PER_CAPITA_ACCUMULATED: 'mortalityPerCapitaAccumulated',
  MORTALITY_PERCENTAGE: 'mortalityPercentage',
  MORTALITY_PERCENTAGE_ACCUMULATED: 'mortalityPercentageAccumulated',
}

export const TABLE_TYPE = {
  MAIN: 'MAIN',
  CASES_NEW: METRICS.CASES_NEW,
  CASES_ACCUMULATED: METRICS.CASES_ACCUMULATED,
  CASES_PER_CAPITA: METRICS.CASES_PER_CAPITA,
  CASES_PER_CAPITA_ACCUMULATED: METRICS.CASES_PER_CAPITA_ACCUMULATED,
  DEATHS_NEW: METRICS.DEATHS_NEW,
  DEATHS_ACCUMULATED: METRICS.DEATHS_ACCUMULATED,
  DEATHS_PER_CAPITA: METRICS.DEATHS_PER_CAPITA,
  DEATHS_PER_CAPITA_ACCUMULATED: METRICS.DEATHS_PER_CAPITA_ACCUMULATED,
  MORTALITY_PERCENTAGE: METRICS.MORTALITY_PERCENTAGE,
  MORTALITY_PERCENTAGE_ACCUMULATED: METRICS.MORTALITY_PERCENTAGE_ACCUMULATED,
}

// the expiry time of the local storage used for the redux store in minutes
export const STORAGE_EXPIRY_TIMEOUT = 60
export const STORAGE_EXPIRY_KEY = 'updatedAt'
// used to save the current store in localStorage for faster reload
export const REDUX_STORE_STORAGE_NAME = 'dataStore'

// route urls
export const ROUTE_TABLE_OVERVIEW = '/overview'

export const ACTION_GET_DATA_START = 'ACTION_GET_DATA_START'
export const ACTION_GET_DATA_SUCCESS = 'ACTION_GET_DATA_SUCCESS'
export const ACTION_GET_DATA_FAIL = 'ACTION_GET_DATA_FAIL'
export const ACTION_CHANGE_DATE_FILTER_MODE = 'ACTION_CHANGE_DATE_FILTER_MODE'
export const ACTION_CHANGE_DATE_FILTER_INTERVAL = 'ACTION_CHANGE_DATE_FILTER_INTERVAL'
export const ACTION_REPARSE_DATA = 'ACTION_REPARSE_DATA'
export const ACTION_CHANGE_SIZE_PER_PAGE = 'ACTION_CHANGE_SIZE_PER_PAGE'
export const ACTION_CHANGE_GEOID_SELECTION = 'ACTION_CHANGE_GEOID_SELECTION'
export const ACTION_CHANGE_VIEW_MODE = 'ACTION_CHANGE_VIEW_MODE'
export const ACTION_CHANGE_GRAPH_MODE = 'ACTION_CHANGE_GRAPH_MODE'
export const ACTION_CHANGE_GRAPH_SCALE = 'ACTION_CHANGE_GRAPH_SCALE'
export const ACTION_CHANGE_METRIC_GRAPH_VISIBILITY = 'ACTION_CHANGE_METRIC_GRAPH_VISIBILITY'

export const ACTION_SET_NOTIFICATION = 'ACTION_SET_NOTIFICATION'
export const ACTION_CLEAR_NOTIFICATION = 'ACTION_CLEAR_NOTIFICATION'

export const ACTION_ENABLE_MOBILE_MENU = 'ACTION_ENABLE_MOBILE_MENU'
export const ACTION_ENABLE_MOBILE_MENU_SMALL = 'ACTION_ENABLE_MOBILE_MENU_SMALL'
export const ACTION_ENABLE_FIXED_HEADER = 'ACTION_ENABLE_FIXED_HEADER'
export const ACTION_ENABLE_HEADER_SHADOW = 'ACTION_SET_ENABLE_HEADER_SHADOW'
export const ACTION_ENABLE_SIDEBAR_SHADOW = 'ACTION_ENABLE_SIDEBAR_SHADOW'
export const ACTION_ENABLE_FIXED_SIDEBAR = 'ACTION_ENABLE_FIXED_SIDEBAR'
export const ACTION_ENABLE_FIXED_FOOTER = 'ACTION_ENABLE_FIXED_FOOTER'
export const ACTION_ENABLE_PAGE_TITLE_ICON = 'ACTION_ENABLE_PAGE_TITLE_ICON'
export const ACTION_ENABLE_PAGE_TITLE_SUBHEADING = 'ACTION_ENABLE_PAGE_TITLE_SUBHEADING'
export const ACTION_ENABLE_PAGE_TABS_ALT = 'ACTION_ENABLE_PAGE_TABS_ALT'
export const ACTION_SET_BACKGROUND_COLOR = 'ACTION_SET_BACKGROUND_COLOR'
export const ACTION_SET_COLOR_SCHEME = 'ACTION_SET_COLOR_SCHEME'
export const ACTION_SET_HEADER_BACKGROUND_COLOR = 'ACTION_SET_HEADER_BACKGROUND_COLOR'
export const ACTION_TOGGLE_SIDEBAR = 'ACTION_TOGGLE_SIDEBAR'

export const REDUX_STORE_VERSION = '3'
export const REDUX_STORE_VERSION_PROPERTY = 'version'

export const DATE_FORMAT_ECDC = 'DD/MM/YYYY'
export const DATE_FORMAT_APP = 'DD.MM.YYYY'
export const DATE_TIME_FORMAT_APP = 'HH:mm DD.MM.YYYY'
export const LOCALE_DEFAULT = 'de-ch'
