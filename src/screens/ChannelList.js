import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ToolbarAndroid,
  Dimensions,
  AsyncStorage,
  Image
} from 'react-native';
import { USER_KEY,CHANNEL_ID } from '../components/config'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      channelList: this.props.navigation.state.params.channellist,
    }
  }


  render() {
    console.log(" channel=== " + this.state.channelList);
    console.log(" channel=== kind " + this.state.channelList[0].etag);
    const shadowOpt = {
      width: 160,
      height: 170,
      color: "#000",
      border: 2,
      radius: 3,
      opacity: 0.2,
      x: 0,
      y: 3,
      style: { marginVertical: 5 }
    }
    return (
      <View style={styles.container} >
        <ToolbarAndroid
          title='Channels'
          style={styles.toolbar}
          onActionSelected={this.onActionSelected} />
        <FlatList style={styles.listview}
          data={this.state.channelList}
          renderItem={({ item }) =>
              <View style={styles.container_listItem} onTouchEnd={()=>selectChannel(this.props,item.id)}>
                <Image source={{ uri: item.snippet.thumbnails.default.url }} style={styles.photo} />
                <Text style={styles.title}>{item.snippet.title}</Text>
              </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  toolbar: {
    backgroundColor: 'white',
    height: 54,
    position: 'absolute',
    top: 0,
    left: 0,
    elevation: 1,
    width: Dimensions.get('window').width
  },
  listview:{
    marginTop:54
  },
  container_listItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft:8,
    marginRight:16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width-15,
    elevation: 2,

},
title: {
    fontSize: 16,
    marginLeft: 8,
    color: '#000',
    marginTop:15

},
container_text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
},
description: {
    fontSize: 11,
    fontStyle: 'italic',
},
photo: {
    height: 50,
    width: 50,
},
});

function selectChannel(props, channelId)
{   
  AsyncStorage.setItem(CHANNEL_ID, channelId);
  props.navigation.navigate('Dashboard');
}