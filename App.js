import React, {PureComponent, Component } from 'react';
import {Dimensions,View,FlatList} from 'react-native';
import CustomButton from './CustomButton';
import ColorSurface from './ColorSurface';
import { Col, Row, Grid } from "react-native-easy-grid";

const flatListData=[{firstName:'ahmed', lastName:"Bouanani", class:"SIG3"}]
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 class App extends PureComponent {
   constructor(){
     super();
     this.state={
       color:{color:'red'}
     }
   }

  changeColor = (color) =>{
    var color={color:color}
    this.setState({color:color})
  }

  render (){
    const {color} = this.state;
    return(
          
      <React.Fragment>
          <View>
            <View style={{height:windowHeight*1/3,flexDirection:'row'}}>
              <View style={{ justifyContent:'center',alignItems:'center',width: windowWidth*1/2, height: windowHeight*1/3}}>
                  <CustomButton onClick={this.changeColor} color='red' />
              </View>
              <View style={{justifyContent:'center',alignItems:'center',width: windowWidth*1/2, height: windowHeight*1/3}}>
                  <CustomButton  onClick={this.changeColor} color='blue'/>
              </View>
            </View>
            <View>
                <ColorSurface color={color.color}  />
            </View>
          </View>
        </React.Fragment>
    )
    }
  }
 


export default App;

