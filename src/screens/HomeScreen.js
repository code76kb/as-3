import React from 'react';
import { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import { Text, IconButton, Card, } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';  

import { TabNav } from '../navigation';


export default class HomeScreen extends Component {

  renderHeader=()=>{
    return(
      <Card>
        <Card.Content>

        <View style={styles.containerHeaderTxt}>
            <Text style={styles.txtHeader}>{"Browse Plans"}</Text>
            <IconButton style={styles.iconBtnCross} 
              size={16} 
              color='white' 
              icon="close" 
              mode="contained" 
              onPress={() => console.log('Pressed')}/>
        </View>

        <View>
          <Text style={{fontSize:16}}>{"for Airtel Kolkata"}</Text>
        </View>

        <View style={styles.containerSearchBar}>
          <TextInput style={styles.inputSearch}
              placeholder={'Search Plan Amount, TalkTime'}>
          </TextInput>
          <Icon.Button 
            name="search" 
            backgroundColor="white" 
            color="black" 
            iconStyle={{margin:0}} 
            style={{height:40}} 
            size={22} 
            onPress={()=>{}}>
          </Icon.Button>
        </View>

        </Card.Content>
      </Card>
    )
  }

  render(){
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <TabNav>
        </TabNav>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  
  containerHeaderTxt:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center'
  },

  txtHeader:{
    fontSize:22, 
    color:'orange', 
    fontWeight:'bold'
  },

  iconBtnCross:{
    backgroundColor:'black', 
    borderRadius:12
  },

  containerSearchBar:{
    flexDirection:'row', 
    borderBottomWidth:1, 
    borderBottomColor:'gray', 
    marginTop:10
  },

  inputSearch:{
    flex:1, 
    height:40,
    padding:0, 
    fontSize:16 
  },


});
