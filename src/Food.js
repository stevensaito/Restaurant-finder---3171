import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

{/*export default class SegundaTela extends Component{
constructor(props){
  super(props);
  this.state = {}
}

render(){
  return(
    <View style={{flex:1}}>
  <View style={{flex:1,marginTop:15}}>
  <IconButton
    icon="menu"
    color={Colors.black}
    size={50}
    onPress={() =>this.props.navigation.navigate('DrawerToggle')}
  />
  <Text>This is settings</Text>
  </View> 
  </View>

  );
}
}
*/}
export default class App extends React.Component {
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
<Text style={styles.title} >This is the Food page</Text>
<Text style={styles.title} >This is an extra page</Text>
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