import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";
import ChannelList from "./src/screens/ChannelList";
import Splash from "./src/screens/Splash";

 const Project= createSwitchNavigator({
  Splash: {
    screen: Splash
    },
   Login: {
    screen: Login
    },
    ChannelList: {
      screen: ChannelList
      },
    Dashboard: {
      screen: Dashboard
     }
});

export default createAppContainer(Project);