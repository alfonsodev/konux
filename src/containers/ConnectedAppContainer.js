import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { RouteContainer } from 'app/containers'
import configureStore, { history } from 'app/configureStore'

const store = configureStore()
export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RouteContainer />
    </ConnectedRouter>
  </Provider>
)
