import React, { PureComponent, Component } from 'react';
import {FlatList, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {data1} from '__data/data.js';
import Validations from './Validations';
import { Col, Row, Grid } from "react-native-easy-grid";



 class App1 extends PureComponent {
   constructor(){
     super();
     this.state={
         listData:data1,
         firstName:'',
         lastName:'',
         classe:'',
         emailAddress:'',
         phoneNumber:'',
         phoneNumberError: true,
         emailAddressError: true
     }
   }

  
 renderFlatListItem(item){
     return(
     <View style={{borderWidth:1, flexDirection:'row'}}>
       <View style={{flex:2}}>
         <Text style={{paddingBottom:5}}>First Name : {item.item.firstName} </Text>
         <Text style={{paddingBottom:5}}>First Name: {item.item.lastName} </Text>
         <Text style={{paddingBottom:5}}>Class: {item.item.classe} </Text>
         <Text style={{paddingBottom:5}}>emailAddress: {item.item.emailAddress} </Text>
         <Text style={{paddingBottom:5}}>phoneNumber: {item.item.phoneNumber} </Text>
        </View>
         <TouchableOpacity  style={[styles.buttonStyle, {flex:1}]} onPress={()=>this.deleteItem(item.item.key)}><Text style={{color:'white'}}>Delete</Text></TouchableOpacity>
     </View>
     )
 }

 deleteItem(key){
  var listData=this.state.listData.slice();
  let newListdata=listData.filter(item => item.key !== key);
  this.setState({listData:newListdata})
    }

addItem(){
    const {firstName, lastName, classe, emailAddress, phoneNumber, emailAddressError, phoneNumberError} = this.state;
    if(emailAddressError|| phoneNumberError) Alert.alert('Missing inputs')
    else {
    var listData=this.state.listData.slice();
    console.log({key:listData.length+1,firstName:firstName, lastName:lastName, classe:classe})
    listData.push({key:listData.length+1,firstName:firstName, lastName:lastName, classe:classe,phoneNumber:phoneNumber,emailAddress:phoneNumber });
    this.setState({listData:listData})
    }
}

onFirstNameChange=(value)=>{
this.setState({firstName:value})
}

onLastNameChange=(value)=>{
  this.setState({lastName:value})
  }

onClassChange=(value)=>{
    this.setState({classe:value})
}

onPhoneNumberChange=(value)=>{
  console.log(Validations.PHONE_REGEX.test(value))
  this.setState({phoneNumber:value,
  phoneNumberError:!Validations.PHONE_REGEX.test(value)})
}

onEmailAddressChange=(value)=>{
  this.setState({emailAddress:value,
  emailAddressError:!Validations.EMAIL_REGEX.test(value)})
}

  

  render (){
      const {listData}=this.state;
    return(
          <React.Fragment>
            <Grid>
            <Row size={4} style={{flexDirection:'column'}}>
              <View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{flex:1}}>firstName:</Text>
            <TextInput style={{flex:2.5}} placeholder="First name" value={this.state.firstName} underlineColorAndroid='grey'
            onChangeText={(value)=>this.onFirstNameChange(value)}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{flex:1}}>lastName:</Text>
             <TextInput style={{flex:2.5}} placeholder="Last name" value={this.state.lastName} underlineColorAndroid='grey'
            onChangeText={(value)=>this.onLastNameChange(value)}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{flex:1}}>class:</Text>
            <TextInput style={{flex:2.5}} placeholder="Class" value={this.state.classe} underlineColorAndroid='grey'
            onChangeText={(value)=>this.onClassChange(value)}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{flex:1}}>Email address {this.state.emailAddressError?'*':null}:</Text>
            <TextInput style={{flex:2.5}} placeholder="Email address" value={this.state.emailAddress} underlineColorAndroid='grey'
            onChangeText={(value)=>this.onEmailAddressChange(value)}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{flex:1}}>Phone Number{this.state.phoneNumberError?'*':null}:</Text>
            <TextInput style={{flex:2.5}} placeholder="Phone Number" value={this.state.phoneNumber} underlineColorAndroid='grey'
            onChangeText={(value)=>this.onPhoneNumberChange(value)}></TextInput>
            </View>
            </View>
            </Row>
            <Row size={1} style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={[styles.buttonStyle]} onPress={()=>this.addItem()}><Text style={{color:'white'}}>Insert</Text></TouchableOpacity>
            </Row>
            </Grid>
            </React.Fragment>
    )
    }
  }
 
  const styles= StyleSheet.create({
    buttonStyle:{
    alignSelf: 'center',
    width:100,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    height:30,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: 'blue'}
  }
  )


export default App1;

