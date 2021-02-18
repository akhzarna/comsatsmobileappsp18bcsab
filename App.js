
import React, { Component } from 'react';
import { Button,
        View,
        Text,
        ScrollView,
        FlatList,
        TouchableOpacity,
        Alert,
        StyleSheet,
        Image,
        TextInput } from 'react-native';



var logo = require('./logo.jpg');



// var Constants=require('./Constants');
// var favIcon=require('./Icons/favicon.png');
// var settings=require('./Icons/setting.png');

class App extends Component {

  constructor(props){
    super(props);
    this.state={
          showSearchField:false,
          searchArray:[],
        }
  }

  componentDidMount(){

  }

  actSearch(text){
  this.state.showSearchField=true;
  this.setState({
    showSearchField:this.state.showSearchField,
  })
}

  actionTextBlur(){

  }

  submitScreen(){
    console.log('Con');
    Alert.alert('Button Pressed');
  }

  render(){

    // <View style={{flex:1,backgroundColor:'skyblue',justifyContent:'center',}}>
    //     <Text> In The name of Allah </Text>
    //     <Image style={{width:100,height:100}}
    //           source={logo}
    //           />
    //   </View>

  return (

    <View style={{flex: 1}}>

      <View style={{flex: 2,backgroundColor:'green'}}>

      <View style={{flex: 2, flexDirection:'row', backgroundColor:'green'}}>

        <View style={{flex: 2, backgroundColor:'red'}}>
            <Text> Hello Irfan what is your confusion please tell me, Hello Irfan what is your confusion please tell me Hello Irfan what is your confusion please tell me </Text>
        </View>

        <View style={{flex: 2, backgroundColor:'blue'}}>

        </View>

      </View>

      </View>

      <View style={{flex: 4,}}>

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom:30,marginTop:30 }}
        onChangeText={text => onChangeText(text)}
        value={12}
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={12}
          />

      </View>

      <View style={{flex: 2}}>

      <Button
      title="Learn More"
      color="black"
      accessibilityLabel="Learn more about this purple button"
      />

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
    // backgroundColor:Constants.ThemeColor,
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
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10,
    marginRight:10,
    width:60,
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

export default App;
