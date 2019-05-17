import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";
import Home from "./src/screens/Home";



 const Project= createStackNavigator({
   Login: {
    screen: Login
    },
    Dashboard: {
      screen: Dashboard
     }
});

export default createAppContainer(Project);