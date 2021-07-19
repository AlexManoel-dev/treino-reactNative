import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Globais from './componentes/Globais'

// export default function App() {
//   return (
//     <View>
//       <Text>CFB Cursos</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({

// });

export default class App1 extends Component{
  
  nome = Globais.nome
  canal = Globais.canal
  numero = Globais.numero

  render(){
    return(
      <View>
        <Text>Nome: {this.nome}</Text>
        <Text>Canal: {this.canal}</Text>
        <Text>Número: {this.numero}</Text>
      </View>
    )
  }
}