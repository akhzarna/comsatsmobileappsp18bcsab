
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, FlatList, TouchableOpacity, Alert, StyleSheet, Image, TextInput } from 'react-native';

var favIcon=require('./Icons/favicon.png');
var settings=require('./Icons/setting.png');
var settingsnew=require('./Icons/settingsnew.png');

class Dashboard extends Component {

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
   this.props.navigation.navigate('Register');
  }

  actSearch(text){
  }

  actionTextBlur(){
  }

  render(){
    return(
      <View style={{flex:1,backgroundColor:'#eeeeee',justifyContent:'center',}}>
            <View style={{flex:0,marginLeft:2,marginRight:2,marginTop:2,marginBottom:2}}>
                      <TextInput
                        autoFocus={false}
                        selectionColor='white'
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.actSearch(text)}
                        onBlur={()=>this.actionTextBlur()}
                        placeholder="Search Surah Number or Name"
                        style={{
                          borderWidth:0,
                          borderColor:'grey',
                          height:40,
                          marginRight:0,
                          textAlign:'left',
                          paddingRight:15,
                          paddingLeft:15,
                          borderRadius:200,
                          color:'black'
                        }}
                      />
              </View>
          <View style={styles.iconView}>
               <TouchableOpacity onPress={this.settingScreen}>
                <Image style={{width:150,height:40}} source={settingsnew}/>
               </TouchableOpacity>

            <Text> This is Dashboard Component </Text>
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

export default Dashboard;
