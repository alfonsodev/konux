import React from 'react'
import {
  LayoutContainer,
  MapContainer,
} from 'app/containers'
import ConnectedSwitch from 'app/components/ConnectedSwitch'
import { Route } from 'react-router'
import withStyles from 'material-ui/styles/withStyles'
import Theme from 'app/theme'
import { HOME_PATH } from 'app/constants/router'

const Routes = props => (
  <LayoutContainer className={props.classes.root} >
    <ConnectedSwitch>
      <Route exact path={HOME_PATH} component={MapContainer} />
    </ConnectedSwitch>
  </LayoutContainer>
)

export default withStyles(Theme)(Routes)
