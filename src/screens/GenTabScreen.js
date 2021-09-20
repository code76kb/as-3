import React from 'react';
import { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import { Text, Button, Card} from 'react-native-paper'

const dumpy={
  amount:302,
  validity:365,
  description:'Enjoy truly unlimited pack, STD & Roaming calls on any network, 1 GB data per day 100 National SMS/day for 28 days'
}

const dumpy2={
  amount:332,
  validity:90,
  description:'Enjoy truly unlimited pack, STD & Roaming calls on any network, 1 GB data per day 100 National SMS/day for 28 days'
}

export default class GenTabScreen extends Component {

  constructor(props){
    super(props)
    this.state={
      slots:[dumpy, dumpy2, dumpy, dumpy2],
    }
  }

  renderRow=({item, index})=>{
    return(
      <Card elevation={2} style={styles.rowCardContainer}>
         <Card.Content>
          <View style={styles.containerTxtAmount}>
              <Text style={styles.txtAmount}>{`₹${item.amount}`}</Text>
              <Button mode='outlined' 
                      style={styles.btnSelect} 
                      labelStyle={styles.txtSelect} 
                      color="black" 
                      onPress={()=>{}}>
                        {"Select"}
              </Button>
          </View>

          <View style={styles.containerTxtValidity}>
              <Text style={styles.txtValidity}>{`Validity: ${item.validity} Days`}</Text>
          </View>

          <View style={styles.containerTxtDetail}>
              <Text style={styles.txtDetail}>{`${item.description}`}</Text>
          </View>
        </Card.Content>
      </Card>
    )
  }

  renderSeparator=()=>{
    return(
      <View style={{width:'100%', height:1, backgroundColor:'gray'}}>
      </View>
    )
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={this.state.slots}
          extraData={this.state}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => index.toString()}
          >
        </FlatList>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
  container:{
    flex:1,
    padding:8, 
    backgroundColor:'white'
  },

  rowCardContainer:{
    marginTop:2, 
    marginHorizontal:2, 
    borderBottomWidth:1, 
    borderBottomColor:'gray'
  },

  containerTxtAmount:{
    flex:0.2, 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center', 
    paddingVertical:4
  },

  txtAmount:{
    color:'black', 
    fontSize:20, 
    fontWeight:'bold'
  },

  btnSelect:{
    borderColor:'orange', 
    borderRadius:16,
  },

  txtSelect:{
    marginVertical:4, 
    color:'orange'
  },

  containerTxtValidity:{
    flex:0.1, 
    flexDirection:'row', 
    alignItems:'center', 
    paddingVertical:4
  },

  txtValidity:{
    color:'black', 
    fontSize:17, 
  },

  containerTxtDetail:{
    flex:0.7, 
  },

  txtDetail:{
    color:'gray', 
    fontSize:16, 
  },

});