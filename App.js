// import React, { Component } from 'react';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Fl from './componentes/flatList'
import Carro from './componentes/carro'
import Carro2 from './componentes/carro2'

const img = './assets/bgApp.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CFB Cursos</Text>
      <Text>Curso de React Native</Text>
      <Carro nome='Golf'/>
      <Carro nome='HRV'/>
      <Carro2 nome='Polo'/>
      <Carro2 nome='Fit'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24
  },
  logo: {
    width: 50,
    resizeMode: 'contain'
  },
  imagemFundo: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%'
  },
  testeView: {
    backgroundColor: '#0ff',
    color: '#fff',
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  testeView2: {
    backgroundColor: '#ff0',
    color: '#fff',
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});