import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";
import Home from "./src/screens/Home";
import Splash from "./src/screens/Splash";

 const Project= createStackNavigator({
  Splash: {
    screen: Splash
    },
   Login: {
    screen: Login
    },
    Dashboard: {
      screen: Dashboard
     }
});

export default createAppContainer(Project);