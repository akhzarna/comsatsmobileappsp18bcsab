
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, FlatList, TouchableOpacity, Alert, StyleSheet, Image, TextInput } from 'react-native';

var favIcon=require('./Icons/favicon.png');
var settings=require('./Icons/setting.png');
var settingsnew=require('./Icons/settingsnew.png');

class More extends Component {

  constructor(props){
    super(props);
    this.state={
          // showSearchField:false,
          // searchArray:[],

        }
  }

  componentDidMount(){
  }

  settingScreen = () => {
   this.props.navigation.navigate('SettingScreen');
  }

  actSearch(text){
  }

  actionTextBlur(){
  }

  render(){
    return(
      <View style={{flex:1,backgroundColor:'#eeeeee',justifyContent:'center',}}>
            <View style={{flex:0,marginLeft:2,marginRight:2,marginTop:2,marginBottom:2}}>
            </View>
          <View style={styles.iconView}>

          <Text> More </Text>

          </View>
      </View>
      );
    }
}

const styles=StyleSheet.create({

  headerStyle:{
  justifyContent:'center',
  width:window.width,
	},
  viewStyle:{
    height: 60,
    backgroundColor:'#1d1c62',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  titleStyle:{
  fontWeight:'bold',
  color:  'white',    //'#2A3990',
  fontSize:18,
  fontFamily:'UrduTypesetting',
  },
  iconView:{
    flex:0.1,
    paddingRight:5,
    backgroundColor:'green',
  },
  textView:{
    flex:0.9,
    paddingLeft:10,
    alignItems:'center',
    justifyContent:'center',
  },
  notifyStyle:{
    flex:0.1,
    height:40,
    alignItems:'flex-start',
    justifyContent:'center',
  },
  iconStyle:{
    width:20,
    height:17,
  },
  buttonDimension:{
    alignItems:'center',
    justifyContent:'center',
    marginRight:8,
    width:40,
    height:40,
  },
  iconMenuDimension:{
    width:25,
    height:20,
  },
  buttonNotificationDimention:{
    alignItems:'center',
    justifyContent:'center',
    marginRight:10,
    width:40,
    height:40,
  },
  iconNotifyDimension:{
     width:30,
     height:25,
     marginRight:15,
     resizeMode: 'contain',
  },
  notifyheaderStyle:{
  justifyContent:'center',
  alignItems:'center',
  height: 120,
  },
});

export default More;
