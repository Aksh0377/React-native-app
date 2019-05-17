import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import { USER_KEY } from '../components/config'

export default class Home extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home'
        }
      }
    };
  }
  componentDidMount()
  {
    fetch("https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&key=AIzaSyDSxNLfAOsdbcPMldU1JTDR2mEFUKri6h8")
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   dataSource: responseJson
  })
  console.log("data "+responseJson);
})
.catch(error=>console.log(error))
  }
  logout = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY)
      goToAuth()
    } catch (err) {
      console.log('error signing out...: ', err)
    }
  }
  render() {
    return (
      <Text> hello home</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

