
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Quran from "./Quran.js";
import Hadees from "./Hadees.js";
import HomeViewController from "./HomeViewController.js";
import Ibadaat from "./Ibadaat.js";
import SettingScreen from "./SettingScreen.js";
import SettingScreen1 from "./SettingScreen1.js";
import Fontsetting from "./Fontsetting.js";
import More from "./More.js";
import Quran1 from "./Quran1.js";
import Quran2 from "./Quran2.js";

const QuranStack = createStackNavigator();

function QuranStackScreen() {
  return (
    <QuranStack.Navigator>
      <QuranStack.Screen name="Quran1" component={Quran1} />
      <QuranStack.Screen name="Quran2" component={Quran2} />
    </QuranStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingScreen" component={SettingScreen} />
      <SettingsStack.Screen name="SettingScreen1" component={SettingScreen1} />
      <SettingsStack.Screen name="Fontsetting" component={Fontsetting} />
    </SettingsStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{ headerShown: false }} initialRouteName="HomeViewController">
        <Tab.Screen name="Quran" component={QuranStackScreen} />
        <Tab.Screen name="Hadees" component={Hadees} />
        <Tab.Screen name="HomeViewController" component={HomeViewController} />
        <Tab.Screen name="Ibadaat" component={Ibadaat} />
        <Tab.Screen name="More" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;



// import React, { Component } from 'react';
//
// import { Button,
//         View,
//         Text,
//         ScrollView,
//         FlatList,
//         TouchableOpacity,
//         Alert,
//         StyleSheet,
//         Image,
//         TextInput } from 'react-native';
//
// var logo = require('./logo.jpg');
//
// // var Constants=require('./Constants');
// // var favIcon=require('./Icons/favicon.png');
// // var settings=require('./Icons/setting.png');
//
// class App extends Component {
//
//   constructor(props){
//     super(props);
//     this.state={
//           showSearchField:false,
//           searchArray:[],
//         }
//   }
//
//   componentDidMount(){
//
//   }
//
//   actSearch(text){
//   this.state.showSearchField=true;
//   this.setState({
//     showSearchField:this.state.showSearchField,
//   })
// }
//
//   actionTextBlur(){
//
//   }
//
//   submitScreen(){
//     console.log('Con');
//     Alert.alert('Button Pressed');
//   }
//
//   render(){
//
//     // <View style={{flex:1,backgroundColor:'skyblue',justifyContent:'center',}}>
//     //     <Text> In The name of Allah </Text>
//     //     <Image style={{width:100,height:100}}
//     //           source={logo}
//     //           />
//     //   </View>
//
//   return (
//
//     <View style={{flex: 1, flexDirection:'row'}}>
//
//         <View style={{flex: .334,flexDirection:'column', backgroundColor:'white'}}>
//             <View style={{flex: .10, backgroundColor:'white'}}>
//               <Text> Navigation 1 </Text>
//             </View>
//
//             <View style={{flex: .10, backgroundColor:'green'}}>
//               <Text> Navigation 3 </Text>
//             </View>
//
//             <View style={{flex: .10, backgroundColor:'blue'}}>
//               <Text> Navigation 2 </Text>
//             </View>
//         </View>
//
//         <View style={{flex: .334, backgroundColor:'orange'}}>
//         </View>
//
//         <View style={{flex: .334, backgroundColor:'green'}}>
//         </View>
//
//     </View>
//
//       );
//     }
// }
//
// const styles=StyleSheet.create({
//
//   headerStyle:{
//   justifyContent:'center',
//   width:window.width,
// 	},
//   viewStyle:{
//     height: 60,
//     // backgroundColor:Constants.ThemeColor,
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center',
//   },
//   titleStyle:{
//   fontWeight:'bold',
//   color:  'white',    //'#2A3990',
//   fontSize:18,
//   fontFamily:'UrduTypesetting',
//   },
//   iconView:{
//     flex:0.1,
//     paddingRight:5,
//   },
//   textView:{
//     flex:0.9,
//     paddingLeft:10,
//     alignItems:'center',
//     justifyContent:'center',
//   },
//   notifyStyle:{
//     flex:0.1,
//     height:40,
//     alignItems:'flex-start',
//     justifyContent:'center',
//   },
//   iconStyle:{
//     width:20,
//     height:17,
//   },
//   buttonDimension:{
//     flex:1,
//     backgroundColor:'green',
//     alignItems:'center',
//     justifyContent:'center',
//     marginLeft:10,
//     marginRight:10,
//     width:60,
//     height:40,
//   },
//   iconMenuDimension:{
//     width:25,
//     height:20,
//   },
//   buttonNotificationDimention:{
//     alignItems:'center',
//     justifyContent:'center',
//     marginRight:10,
//     width:40,
//     height:40,
//   },
//   iconNotifyDimension:{
//      width:30,
//      height:25,
//      marginRight:15,
//      resizeMode: 'contain',
//   },
//   notifyheaderStyle:{
//   justifyContent:'center',
//   alignItems:'center',
//   height: 120,
//   },
// });
//
// export default App;
