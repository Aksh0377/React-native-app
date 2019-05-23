import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Router  from './Router'
import MainNavigator  from './MainNavigator'


// const App = () => <MainNavigator/>
// export default App;


import NavigationService from './src/components/NavigationService';
export default class App extends React.Component {
  // ...

  render() {
    return (
      <MainNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}



// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: Login
//   }
// });

// export default createAppContainer(AppNavigator);