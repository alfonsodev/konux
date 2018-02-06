import React from 'react'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'
import AssetForm from 'app/components/AssetForm'
import 'typeface-roboto'
import Typography from 'material-ui/Typography'

const styles = {
  drawerHeader: {
    textAlign: 'center',
  },
  drawer: {
    width: '25vw',
    height: '100%',
    marginLeft: 40,
    marginTop: 40,
  },
}
const AssetDrawer = props => (
  <Drawer anchor="right" open={props.open} onClose={props.onClose}>
    <div tabIndex={0} role="button" className={props.classes.drawer} >
      <div className={props.classes.drawerHeader}><Typography type="display1" >Asset Information</Typography></div>
      <Divider />
      <AssetForm
        asset={props.asset}
        editing={props.editing}
        onPressEdit={props.onPressEdit}
        onPressCancel={props.onPressCancel}
        onPressSave={props.onPressSave}
        onSelectHealth={props.onSelectHealth}
        onAssetChange={props.onAssetChange}
      />
    </div>
  </Drawer>
)

export default withStyles(styles)(AssetDrawer)
