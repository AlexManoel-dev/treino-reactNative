import React from 'react';
import { View } from 'react-native'

export default function() {
    return(
       <View style={{width:'100%', height:300, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
           <View style={{width:50,height:50,backgroundColor:'#00f'}}></View>
           <View style={{width:50,height:50,backgroundColor:'#00a'}}></View>
           <View style={{width:50,height:50,backgroundColor:'#005'}}></View>
       </View>
    )
}

// flexDirection define o ponto de referência do elemento, se vai ser o main-axis ou o cross-axis
// justifyContent alinha os elementos horizontalmente
// alignItems alinha os elementos verticalmente