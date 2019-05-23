import React from 'react';
import { StyleSheet, Text, View, Alert, Button, AsyncStorage,ActivityIndicator } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import { USER_KEY,CHANNEL_ID } from '../components/config'
let dataFile = require('./data.json');

  export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: '',
    };

  }
  componentDidMount() { 

    GoogleSignin.configure({
      //It is mandatory to call this method before attempting to call signIn()
      scopes: ['https://www.googleapis.com/auth/youtube.readonly email profile', 'https://www.googleapis.com/auth/youtube'],
      // Repleace with your webClientId generated from Firebase console
      webClientId: '335465328392-7g3l551l8ehtocnn3rt2o0rtlesc2387.apps.googleusercontent.com',
    //     'Replace Your Web Client Id here',
    androidClientId: '335465328392-76edho6pq3pifu171roh4l47taism0cu.apps.googleusercontent.com'

    });
  }
  _signIn = async () => {
    //Prompts a modal to let the user sign in into your application.
    try {
      await GoogleSignin.hasPlayServices({
        //Check if device has Google Play Services installed.
        //Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);

      const url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true&key=AIzaSyA4uAAtKaBWLx7-UnD-5yX2GEhboAmjojQ';
      try {
        const tokens = await GoogleSignin.getTokens();
        console.log('User token --> ', tokens);
        AsyncStorage.setItem(USER_KEY, tokens.accessToken);
        
        fetch(url, {
          headers: { Authorization: `Bearer ${tokens.accessToken}` }
          }).then(response => response.json())
            .then((responseJson)=> {
              var data = JSON.stringify(responseJson)
              var data1 = JSON.parse(data);
              var channelId = data1.items[0].id;

             console.log(" channel Id== --> "+ channelId)

             if(data1.items.length ==1)
             {
              this.props.navigation.navigate("ChannelList", { channellist : data1.items});
             }
             else {
              AsyncStorage.setItem(CHANNEL_ID, channelId);
              this.props.navigation.navigate("Dashboard");
             }
          });
      } catch (error) {
        console.error(error);
      }
     
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };
  // _getCurrentUser = async () => {
  //   //May be called eg. in the componentDidMount of your main component.
  //   //This method returns the current user
  //   //if they already signed in and null otherwise.
  //   try {
  //     const userInfo = await GoogleSignin.signInSilently();
  //     this.setState({ userInfo });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  render() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this._signIn}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 






