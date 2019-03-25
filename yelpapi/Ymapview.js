import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { MapView } from 'expo'

const Marker = MapView.Marker

export default class Map extends Component {
  renderMarkers() {
    return this.props.places.map((place, i) => (
      <Marker
      key={i}
      //title={place.name + " (" + place.rating + " stars)"}
      //title={place.name + " (" + place.phone + ")"}
      title={place.name}
      coordinate={place.coords}
      description={place.city + " "}
      
      />
    ))
  }
  
  render() {
    const { region } = this.props
    return (
      <MapView
        style={styles.container}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
        {this.renderMarkers()}
      </MapView>
    )
  }
}
const styles = {
  container: {
    flex: 1,
  }
}