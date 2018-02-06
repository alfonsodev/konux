import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map, AssetDrawer } from 'app/components'
import {
  createFetchAssetList,
  createOnAssetClick,
  createOnPressEdit,
  createOnPressCancel,
  createOnPressSave,
  createSelectHealth,
  createAssetPreviewChange,
} from 'app/actions/assets'
import { createToggleRightDrawer } from 'app/actions/MapContainer'

import type { Asset } from 'app/flow'

class MapContainer extends Component {
  componentDidMount() {
    this.props.dispatch(createFetchAssetList())
  }

  handleMarkerClick = (asset: Asset) => {
    this.props.dispatch(createOnAssetClick(asset))
  }

  handlePressEdit = () => {
    this.props.dispatch(createOnPressEdit())
  }

  handlePressCancel = () => {
    this.props.dispatch(createOnPressCancel())
  }

  handlePressSave = (asset) => {
    this.props.dispatch(createOnPressSave(asset))
  }

  handleSelectHealth = (health) => {
    this.props.dispatch(createSelectHealth(health))
  }

  handleAssetChange = (asset) => {
    this.props.dispatch(createAssetPreviewChange(asset))
  }

  toggleDrawer = () => {
    this.props.dispatch(createToggleRightDrawer())
  }

  render() {
    return (<div>
      <Map
        assetList={this.props.assetList}
        loadingAssets={this.props.loadingAssets}
        onMarkerClick={this.handleMarkerClick}
      />
      <AssetDrawer
        open={this.props.rightDrawerOpen}
        asset={this.props.selectedAsset}
        editing={this.props.editing}
        onClose={this.toggleDrawer}
        onPressEdit={this.handlePressEdit}
        onPressCancel={this.handlePressCancel}
        onPressSave={this.handlePressSave}
        onSelectHealth={this.handleSelectHealth}
        onAssetChange={this.handleAssetChange}
      />
    </div>)
  }
}

const mapStateToProps = state => ({
  assetList: state.MapContainer.assetList.items,
  loadingAssets: state.MapContainer.assetList.fetching,
  rightDrawerOpen: state.MapContainer.rightDrawerOpen,
  selectedAsset: state.MapContainer.selectedAsset,
  editing: state.MapContainer.assetForm.editing,
})

export default connect(mapStateToProps)(MapContainer)
