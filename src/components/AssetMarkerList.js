import React from 'react'
import { Marker } from 'react-google-maps'
import { map } from 'ramda'

const colors = {
  good: '40C7CA',
  bad: 'FF7588',
  warning: 'FFA87D',
}
export default props => map(item => (
  <Marker
    key={item.id}
    position={{ lat: item.coordinates[0], lng: item.coordinates[1] }}
    onClick={() => { props.onClick(item) }}
    icon={{
      url: `//chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|${colors[item.health]}`,
    }}
  />
), props.assetList)
