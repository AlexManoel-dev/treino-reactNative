import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import Caixas from './componentes/caixas'

/* 
(n) => {return n*2}
(n1,n2) => {return n1 + n2}

somente se pode fazer assim caso houver somente 1 parâmetro
n => {
  return n*2
}
*/

const dobro = n => n*2

const soma = (n1,n2) => n1 + n2

export default function App() {
  let valorExibir = true
  return (
    <View style={styles.container}>
      <Text>{dobro(2)}</Text>
      <Text>{soma(2,4)}</Text>
      <Image style={styles.logo} source={require('./assets/favicon.png')}/>
      <Caixas exibir={valorExibir}/>
      {/* Exibindo direto */}
      {valorExibir?(<Text>Curso de React Native</Text>):(<Text> - - - </Text>)}
      {/* Maneira simples de fazer uma condição, se for false nem vai fazer nada. Mas caso for true vai parar no começo */}
      {valorExibir && (<Text>Curso de React Native</Text>)}
      {/* {exibir(true)} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    resizeMode: 'contain'
  }
});