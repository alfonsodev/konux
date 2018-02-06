import ReactDOM from 'react-dom'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import ConnectedAppContainer from 'app/containers/ConnectedAppContainer'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(ConnectedAppContainer)

if (module.hot) {
  module.hot.accept('app/containers/ConnectedAppContainer', () => {
    const nextApp = require('app/containers/ConnectedAppContainer').default
    render(nextApp)
  })
}
