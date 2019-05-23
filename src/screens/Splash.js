import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
  Image
} from 'react-native'
import { USER_KEY, CHANNEL_ID} from '../components/config'
import {Navigation} from 'react-native-navigation';
import {GoogleSignin} from 'react-native-google-signin';
let dataFile = require('./data.json');


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

  constructor(props) {
    super(props);
  
    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve(AsyncStorage.getItem(CHANNEL_ID)) },
        2000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    console.log("user data "+data);
  
    if (data !== null) {
      // this.props.navigation.navigate("Dashboard");
      this.props.navigation.navigate("ChannelList",{channellist: dataFile.items });

    }
    else{
      this.props.navigation.navigate("Login");

    }
  }
   
  
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text1}>MakeSense.AI</Text>
      <Text style={styles.text1}>Predict the future of your youtube channel and </Text>

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
   text1: {
       color: "black",
       
    },
   text2: {
    color: "black",
    
    justifyContent: 'center',
}
})

