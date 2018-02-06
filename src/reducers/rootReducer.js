import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as reducers from './'

export default combineReducers({
  ...reducers,
  router: routerReducer,
})
