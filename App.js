import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Caixas from './componentes/caixas'

export default function App() {
  let valorExibir = true
  return (
    <View style={styles.container}>
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