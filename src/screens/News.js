import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
  ToolbarAndroid,
  Dimensions
} from 'react-native'
import {Navigation} from 'react-native-navigation';

export default class News extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home'
        },
      }
    };
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
      <View style={styles.container}>
        <ToolbarAndroid
        title='News'
        style={styles.toolbar}
        onActionSelected={this.onActionSelected} />       
         <Text> hello home</Text>
        <Text>Hello from Home screen.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolbar: {
    backgroundColor: 'white',
    height: 54,
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: Dimensions.get('window').width,
    elevation: 2,

  }
})

