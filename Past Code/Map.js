import React from 'react';
import { MapView } from 'expo';
import { Linking, Alert } from 'react-native';
import {Text, View, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';  //call on library
import { IconButton, Colors } from 'react-native-paper';
import { Dimensions } from 'react-native'

export default class Map extends React.Component {
  constructor() {
    super();
this.state = {
      isLoading: true,
      markers: [],
      origin: { latitude: 49.1828, longitude: -122.8449 },
    };
config = {
      headers: {
        Authorization: 'Bearer <"ggpM0gvjU4N5p9WHe0U8j9cIpE66QXDQrK_HiM6ZsFD_fw7ZKbTpRrl4KbuPcPX4IO1wrXYMKpEnmn4hBeIyEkO7o5QSB0M4ea65JAwGtGVy8GtMDxGWZ7ro9CSUXHYx">',
      },
      params: {
        term: 'Tourists Must See List', 
//term to search locations by
        raduis: 0.5, 
        latitude: this.state.origin.latitude, 
        longitude: this.state.origin.longitude, 
// for lat/long we are searching locations by proximity of users location which is the location from geolocation api
        sort_by: 'distance', 
//can sort by best_match, rating, review_count or distance    
 
        limit: 5, 
//the amount of location markers you want to show
      },
    };
  }
getLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          let newOrigin = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          config.params.latitude = newOrigin.latitude;
          config.params.longitude = newOrigin.longitude;
this.setState({
            origin: newOrigin,
          });
          resolve(true);
        },
        err => {
          console.log('error');
          console.log(err);
          reject(reject);
        },
        { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
      );
    });
  };
async componentDidMount() {
    await this.getLocation();
    await this.fetchMarkerData();
  }
fetchMarkerData() {
    return axios
      .get('https://api.yelp.com/v3/businesses/search/', config)
      .then(responseJson => {
        this.setState({
          isLoading: false,
          markers: responseJson.data.businesses.map(x => x),
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
render() {
    return (
      <View style={styles.container}>
      {/* ----------------MENU BUTTON AND TOP BAR----------------------- */}
        <View style={styles.headermenu}>
        <IconButton
    icon="menu"
    color={Colors.black}
    size={50}
    onPress={() =>this.props.navigation.navigate('DrawerToggle') }
  />
        {/*<Text style={styles.title} >Name of App</Text>*/}
          </View>
          {/* ----------------MENU BUTTON AND TOP BAR----------------------- */}
      <MapView
        style={{ flex: 1 }}
        provider="google"
        region={{
          latitude: this.state.origin.latitude,
          longitude: this.state.origin.longitude,
          latitudeDelta: 0.0100,
          longitudeDelta: 0.0100,
        }}
      >
        {this.state.isLoading
          ? null
          : this.state.markers.map(marker => {
              const coords = {
                latitude: marker.coordinates.latitude,
                longitude: marker.coordinates.longitude,
              };
const nameOfMarker = `${marker.name}(${marker.rating} rating)`;
const addressOfMarker = `${marker.location.address1}, ${marker.location.city}`;
              return (
                <MapView.Marker
                  key={marker.id}
                  coordinate={coords}
                  title={nameOfMarker}
                  description={addressOfMarker}
                >
</MapView.Marker>
              );
            })}
            {/* ----------------WHERE THE USER IS----------------------- */}
<MapView.Marker coordinate={this.state.origin}>
        </MapView.Marker>
        {/* ----------------WHERE THE USER IS----------------------- */}
        

      </MapView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});