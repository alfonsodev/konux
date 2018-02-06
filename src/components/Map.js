import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import { compose, withProps } from 'recompose'
import AssetMarkerList from 'app/components/AssetMarkerList'

const defaultCenter = { lat: 46.7834818, lng: 23.5464728 }
const GoogleMapConfig = {
  key: 'AIzaSyAa_Fd6Bywb0Kh3rhWNN4BFW2nVOYiu-u8',
  libraries: 'places',
}
const defaultProps = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${GoogleMapConfig.key}&libraries=geometry,drawing,places`,
  loadingElement: <div style={{ height: '100%' }} />,
  containerElement: <div style={{ height: '500px' }} />,
  mapElement: <div style={{ height: '100%' }} />,
}

const Map = props => (
  <GoogleMap defaultZoom={12} defaultCenter={defaultCenter} >
    <AssetMarkerList assetList={props.assetList} onClick={props.onMarkerClick} />
  </GoogleMap>)

const MyMapComponent = compose(withProps(defaultProps), withScriptjs, withGoogleMap)(Map)

export default MyMapComponent
