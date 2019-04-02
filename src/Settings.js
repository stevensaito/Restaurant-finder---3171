import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Slider, Alert, ScrollView } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { Util } from 'expo';
import { CheckBox } from 'react-native-elements';
import AwesomeButton from "react-native-really-awesome-button";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setdistance: 3000 };
  }
  getVal(val) {
    console.warn(val);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* ----------------MENU BUTTON AND TOP BAR----------------------- */}
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
        {/* ----------------MENU BUTTON AND TOP BAR----------------------- */}
{/* ----------------LOOK AT BETTER WAY TO ORGANIZE THE DIFFERENT VIEWS OF THESE COMPONENTS, WITHOUT THE VIEWS THINGS MOVE TO TOP AND BOTTOM----------------------- */}
        <View style={styles.slidecontainer}>
        <View style={styles.slidecontainer}>
        <Text  style={styles.descriptionText}>
           {"\n"} What is the furthest distance you would want to travel {"\n"}
          </Text>
          <Slider
            style={{ width: 350 }}
            step={1}
            minimumValue={200}
            maximumValue={10000}
            value={this.state.setdistance}
            onValueChange={val => this.setState({ setdistance: val })}
            onSlidingComplete={val => this.getVal(val)}
          />
          <Text style={styles.distancetext}>
            {this.state.setdistance} meters
          </Text>
          </View>
          <ScrollView style={styles.checkcontainer}>
           <Text>
           {"\n"} Select what kinds of food places you would to see {"\n"}
          </Text>
          <CheckBox title="Food" checked={this.state.checked} onValueChange={() => this.setState({ checked: !this.state.checked })}/>
          <CheckBox title="Restaurants" checked={this.state.checked} />
          <CheckBox title="Coffee" checked={this.state.checked} />
          <CheckBox title="Bakery" checked={this.state.checked} />

        </ScrollView>
          <View style={styles.buttonContainer}>
            {/*<Button title="SUBMIT" type="outline" color="white" />*/}
            <AwesomeButton   type="primary">SUBMIT</AwesomeButton>
          </View>
        </View>
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
    flexDirection: 'row',
  },
  slidecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  checkcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#6666FF',
    padding: 4,
  },
  distancetext: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: 'white',
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
  descriptionText: {
    alignItems: 'center',
  }
});
