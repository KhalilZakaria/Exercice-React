import React, { Component, PureComponent } from 'react';
import { Dimensions,View, Text} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class ColorSurface extends Component{
   
constructor(){
super();

}

render(){
    const {color}=this.props;
    return(
       <View style={{backgroundColor:color, height: windowHeight*2/3}}>
           
       </View>
    )
}

}