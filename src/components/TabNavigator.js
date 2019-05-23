import React, { Component } from "react";
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from "../screens/Home";
import Trending from "../screens/Trending";
import News from "../screens/News";
import Settings from "../screens/Settings";
import Icon from 'react-native-vector-icons/MaterialIcons';


const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={30} color={tintColor} />
      )
    }
  },
  Trending: {
    screen: Trending,
    navigationOptions: {
      tabBarLabel: "Trending",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="whatshot" size={30} color={tintColor} />
      )
    }
  },
  News: {
    screen: News,
    navigationOptions: {
      tabBarLabel: "News",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={30} color={tintColor} />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: "Settings",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="settings" size={30} color={tintColor} />
      )
    }
  },
},
 {
    order: ['Home', 'Trending', 'News', 'Settings'],
    tabBarOptions: {
      activeTintColor: '#900',
      inactiveTintColor: 'gray',
      showIcon: true


    },
  },

)
export default createAppContainer(Tabs);