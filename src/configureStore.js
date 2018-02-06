/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'app/saga/rootSaga'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from 'app/reducers/rootReducer'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()
let middleware = [routerMiddleware(history), sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default()
  const logger = createLogger({ collapsed: true })
  middleware = [...middleware, reduxImmutableStateInvariant, logger]
} else {
  middleware = [...middleware]
}

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  )

  if (module.hot) {
    module.hot.accept(
      './reducers/rootReducer',
      () => store.replaceReducer(rootReducer),
    )
  }
  sagaMiddleware.run(rootSaga)

  return store
}
