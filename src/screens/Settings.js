import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
  ToolbarAndroid,
  Dimensions,
  Alert,
} from 'react-native'
import { Navigation } from 'react-native-navigation';
import {
  GoogleSignin,
} from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../components/NavigationService';
import {USER_KEY, CHANNEL_ID} from '../components/config';




export default class Settings extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home'
        },
      }
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar} title='Settings' navIcon="power-settings-new">
          <Icon name="power-settings-new" size={20} color="#900" style={styles.icon} onPress={()=>showAlert()} />
        </ToolbarAndroid>
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
    width: Dimensions.get('window').width,
    elevation: 2,


  },
  icon: {
    paddingLeft:Dimensions.get('window').width-130
  }

})

function logout() {
  try {
    GoogleSignin.revokeAccess();
    GoogleSignin.clearCachedToken();
    AsyncStorage.removeItem(USER_KEY)
    AsyncStorage.removeItem(CHANNEL_ID)
    GoogleSignin.signOut();
    NavigationService.navigate('Login');
  } catch (error) {
    console.error(error);
  }
}

function showAlert(){
  Alert.alert(
    //title
    'MakeSense',
    //body
    'Are you sure you want to logout ?',
    [
      {text: 'Yes', onPress: () => logout()},
      {text: 'Cancel', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: true }
  );
}

