import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { IconButton, Colors } from 'react-native-paper';

export default class List extends Component {
  renderPlaces() {
    return this.props.places.map((place, i) => (
       <View>
      
        <Text>{"\n"}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{place.name}</Text>
        <Text>Rating: {place.rating} stars</Text>
        <Text>Address: {place.city}</Text>
        <Text>Phone: {place.phone}</Text>
        <Text>From you: {place.distance} meters</Text>
       
        </View>
    ))
  }
  
  render() {
    const { region } = this.props
    return (
      <View style={styles.container}>
        
      <ScrollView>
        {this.renderPlaces()}
        
        </ScrollView>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
headermenu: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.09,
    backgroundColor: '#6666FF',
  },
  title: {
    fontFamily: 'Marker Felt',
    fontSize: 30,
    color: '#E7E7E6',
  },
})