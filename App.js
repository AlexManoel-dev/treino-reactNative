// import React, { Component } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ImageBackground, KeyboardAvoidingView } from 'react-native';
import Fl from './componentes/flatList'

const img = './assets/bgApp.png'

export default function App() {
  return (
    <View style={styles.container}>
        <ImageBackground source={require(img)} style={styles.imagemFundo}>
        <Text>Usando FlatList</Text>
        <Fl/>
      </ImageBackground>
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
  }
});