// import React, { Component } from 'react';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Rl from './componentes/rolagem'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>CFB Cursos</Text>
      <Text>Curso de React Native</Text>
      <Rl/>
    </SafeAreaView>
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