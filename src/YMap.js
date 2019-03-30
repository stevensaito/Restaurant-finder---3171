import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { IconButton, Colors } from 'react-native-paper';
import Map from '../yelpapi/Ymapview'
/* ----------------GETS THE USERS LOCATION----------------------- */
import { Location, Permissions } from 'expo'
/* ----------------GETS THE USERS LOCATION----------------------- */

/* ----------------GETS LOCATIONS FOR COFFEE SHOPS----------------------- */
import YelpService from '../yelpapi/yelpfile'
/* ----------------GETS LOCATIONS FOR COFFEE SHOPS----------------------- */


// A placeholder until we get our own location
const region = {
  latitude: 49.1828, //37.321996988,
  longitude: -122.8449, //-122.0325472123455,
  latitudeDelta: 0.0722,
  longitudeDelta: 0.0421
}
/* ----------------GETS THE USERS LOCATION AND TELL APP HOW MUCH TO ZOOM IN----------------------- */
/* ----------------DELTA IS HOW ZOOMED THE MAP IS----------------------- */
const deltas = {
  //latitudeDelta: 0.0922,
  //longitudeDelta: 0.0421
  latitudeDelta: 0.0722,
  longitudeDelta: 0.0421
};

//Talked about missing component, added class and made it React.Component and it worked
export default class App extends React.Component {
  state = {
    region: null,
    coffeeShops: []
  };

  componentWillMount() {
    this.getLocationAsync();
  }
/* ----------------GETS THE USERS LOCATION AND TELL APP HOW MUCH TO ZOOM IN----------------------- */

/* ----------------GETS LOCATIONS FOR COFFEE SHOPS----------------------- */
getCoffeeShops = async () => {
    const { latitude, longitude } = this.state.region;
    const userLocation = { latitude, longitude };
    const coffeeShops = await YelpService.getCoffeeShops(userLocation);
    this.setState({ coffeeShops });
  };

/* ----------------GETS LOCATIONS FOR COFFEE SHOPS----------------------- */

/* ----------------GETS THE USERS LOCATION----------------------- */
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      });
    }

    let location = await Location.getCurrentPositionAsync({});  //grabbing information from the location, 
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      ...deltas
    };
    await this.setState({ region });

/* ----------------GETS THE USERS LOCATION----------------------- */

/* ----------------GETS LOCATIONS FOR COFFEE SHOPS----------------------- */
    await this.getCoffeeShops();
    /* ----------------GETS LOCATIONS FOR COFFEE SHOPS----------------------- */

/* ----------------GETS THE USERS LOCATION----------------------- */
  }

  render() {
    return (
       <View style={styles.container}>
        <View style={styles.headermenu}>
        {/*TO CREATE TITLE FOR HEADER, NEED VIEWS WITHIN VIEWS, ONE FOR MENU AND OTHER FOR TITLE AND THEN A CONTAINER FOR THE TWO*/}
        <View>
          <IconButton
            icon="menu"
            color={Colors.black}
            size={50}
            onPress={() => this.props.navigation.navigate('DrawerToggle')}
          />
          </View>
          <View style={styles.titlecontainer}> 
          <Text style={styles.title}>Food Hunter</Text>
        </View></View>
          <Map
          region={this.state.region} //This refers to the state region, if you take away this.state, it refers to the const region
          places={this.state.coffeeShops}
        />
          </View>
    );
  }
}
/* ----------------GETS THE USERS LOCATION----------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headermenu: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 0.09,
    backgroundColor: '#6666FF',
    flexDirection: 'row',
  },
      title: {
    fontFamily: 'Marker Felt',
    fontSize: 30,
    color: '#E7E7E6',
  },
  titlecontainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6666FF',
  },
})