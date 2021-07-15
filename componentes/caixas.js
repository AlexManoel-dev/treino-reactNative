import React from 'react';
import { View } from 'react-native'

export default function() {
    return(
       <View style={{width:'100%', height:300, flexDirection:'column', justifyContent:'center', alignItems:'stretch'}}>
           <View style={{flexGrow:1,backgroundColor:'#00f'}}></View>
           <View style={{flexGrow:1,backgroundColor:'#00a'}}></View>
           <View style={{flexGrow:1,backgroundColor:'#005'}}></View>
           <View style={{flexGrow:1,backgroundColor:'#f00'}}></View>
           <View style={{flexGrow:1,backgroundColor:'#a00'}}></View>
           <View style={{flexGrow:1,backgroundColor:'#500'}}></View>
       </View>
    )
}

// flexDirection define o ponto de referência do elemento, se vai ser o main-axis ou o cross-axis
// justifyContent alinha os elementos horizontalmente
// alignItems alinha os elementos verticalmente

// quando o elemento não tem tamanho, o flexDirection está column e o alignItems está stretch, o elemento se esticará
// o flexWrap define se o elemento que não está cabendo dentro do elemento pai, quebrará linha ou não
// flexGrow 1obra o tamanho e reajusta todos os elementos