import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
  ToolbarAndroid,
  Dimensions,
  ListView,
  FlatList,
  ImageBackground,
  Tile,
  Title,
  Subtitle,
  Divider
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

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      dataSource: [
        {
          "name": "Gaspar Brasserie",
          "address": "185 Sutter St, San Francisco, CA 94109",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
        },
        {
          "name": "Chalk Point Kitchen",
          "address": "527 Broome St, New York, NY 10013",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
        },
        {
          "name": "Kyoto Amber Upper East",
          "address": "225 Mulberry St, New York, NY 10012",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
        },
        {
          "name": "Sushi Academy",
          "address": "1900 Warner Ave. Unit A Santa Ana, CA",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
        },
        {
          "name": "Sushibo",
          "address": "35 Sipes Key, New York, NY 10012",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
        },
        {
          "name": "Mastergrill",
          "address": "550 Upton Rue, San Francisco, CA 94109",
          "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" },
        }
      ],
    }
  }

  renderRow(restaurant) {
    return (
      <View>
        <ImageBackground
          styleName="large-banner"
          source={{ uri: "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
          </Tile>
        </ImageBackground>
        <Divider styleName="line" />
      </View>
    );
  }
  
  
  
  // componentDidMount()
  // {
//   fetch("https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true&key=AIzaSyDSxNLfAOsdbcPMldU1JTDR2mEFUKri6h8")
// .then(response => response.json())
// .then((responseJson)=> {
//   this.setState({
//    loading: false,
//    dataSource: responseJson
//   })
//   console.log("data: "+JSON.stringify(responseJson) )

// })
// .catch(error=>console.log("error"+error))




  // }
  // logout = async () => {
  //   try {
  //     await AsyncStorage.removeItem(USER_KEY)
  //     goToAuth()
  //   } catch (err) {
  //     console.log('error signing out...: ', err)
  //   }
  // }
  render() {
    return (
      <View style ={styles.container}>
        <ToolbarAndroid
        title='Home'
        style={styles.toolbar}
        onActionSelected={this.onActionSelected} />    
        {/* <FlatList data={this.state.dataSource} 
          renderItem={(item)=> this.renderRow()}
          />    */}
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

