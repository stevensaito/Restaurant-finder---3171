import {DrawerNavigator} from 'react-navigation'; // 1.0.3
import React, {Component} from 'react'

//import MapScreen from './src/Map';
//import Settings from './src/Settings';
import FoodScreen from './src/Food';
import YMapScreen from './src/YMap';
import FoodListScreen from './src/FoodList';

class App extends Component{
 render(){
   return(
      <Navegador />
   );
 } 
}

const Navegador = DrawerNavigator(
{
  //Home:{screen:MapScreen},
  //FoodScreen:{screen:FoodScreen},
  //YMap:{screen:YMap},
  Home:{screen:YMapScreen},
  FoodListScreen:{screen:FoodListScreen},
  FoodScreen:{screen:FoodScreen},
  //MapScreen:{screen:MapScreen},
  //Settings:{screen:Settings}
}, {
  drawerPosition:'left',
  drawerWidth:200,
  drawerBackgroundColor:'#333333',
  contentOptions:{
    activeTintColor:'#ffffff',
    inactiveTintColor:'#000000',
    activeBackgroundColor:'#6666FF',
    inactiveBackgroundColor:'#ffffff',
    itemsContainerStyle:{
     marginTop:20 
    },
    itemStyle:{
      marginTop:10
    },
    labelStyle:{
      fontSize:16
    },
    iconContainerStyle:{
      backgroundColor:"#000000"
    }
  }
});

export default App;
