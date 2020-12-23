import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from '../screens/DonateBook';
import BookRequestScreen from '../screens/RequestBook';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: BookDonateScreen,
    navigationOptions :{
    //   tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Books",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
    //   tabBarIcon : <Image source={require("../assets/request-book.pngc")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book Request",
    }
  }
});
