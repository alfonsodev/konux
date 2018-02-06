import React from 'react'
import Input, { InputLabel } from 'material-ui/Input'
import { withStyles } from 'material-ui/styles'
import AssetFormButtonGroup from 'app/components/AssetFormButtonGroup'
import { FormControl, FormHelperText } from 'material-ui/Form'
import AssetHealth from 'app/components/AssetHealth'
import AssetHealthSelector from './AssetHealthSelector'

const style = {
  imput: {
    margin: 10,
  },
  formControl: {
    margin: 10,
  },
  thumbUpIcon: {
    color: '',
  },
}

const AssetForm = props => (
  <div>
    <FormControl className={props.classes.formControl} disabled={!props.editing}>
      <InputLabel htmlFor="name">Name</InputLabel>
      <Input
        id="name"
        defaultValue={props.asset.name}
        onChange={(event) => {
          props.onAssetChange({
            ...props.asset,
            name: event.target.value,
          })
        }}
      />
      <FormHelperText>{(!props.editing) ? 'Disabled' : 'Write the name of the asset'}</FormHelperText>
    </FormControl>
    <br />
    <FormControl className={props.classes.formControl} disabled={!props.editing}>
      <InputLabel htmlFor="name">Latitude</InputLabel>
      <Input
        id="name"
        defaultValue={props.asset.coordinates[0]}
        type="number"
        step={0.000001}
        onChange={(event) => {
          props.onAssetChange({
            ...props.asset, coordinates: [Number(event.target.value), props.asset.coordinates[1]],
          })
        }}
      />
      <FormHelperText>{(!props.editing) ? 'Disabled' : 'Specify the north–south position'}</FormHelperText>
    </FormControl>
    <br />
    <FormControl className={props.classes.formControl} disabled={!props.editing}>
      <InputLabel htmlFor="name">Longitude</InputLabel>
      <Input
        id="name"
        defaultValue={props.asset.coordinates[1]}
        type="number"
        step={0.000001}
        onChange={(event) => {
          props.onAssetChange({
            ...props.asset, coordinates: [props.asset.coordinates[0], Number(event.target.value)],
          })
        }}
      />
      <FormHelperText>{(!props.editing) ? 'Disabled' : 'Specifies the east-west position'}</FormHelperText>
    </FormControl>
    <br />
    {
      props.editing ?
        (<AssetHealthSelector onSelectHealth={props.onSelectHealth} selectedHealth={props.asset.health} />) :
        (<AssetHealth value={props.asset.health} />)
    }
    <br />
    <AssetFormButtonGroup
      editing={props.editing}
      onPressCancel={props.onPressCancel}
      onPressSave={() => { props.onPressSave(props.asset) }}
      onPressEdit={props.onPressEdit}
    />

  </div>
)

export default withStyles(style)(AssetForm)
