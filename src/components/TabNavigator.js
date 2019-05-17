import React, { Component } from "react";
import { createAppContainer,createBottomTabNavigator } from 'react-navigation';
import Home from "../screens/Home";
import Trending from "../screens/Trending";
import News from "../screens/News";
import Settings from "../screens/Settings";

 const Tabs = createBottomTabNavigator({
    Home: { screen: Home },
    Trending: { screen: Trending },
    News: { screen: News },
    Settings: { screen: Settings }
  }, {
    order: ['Home', 'Trending', 'News','Settings']
  })
export default createAppContainer(Tabs);