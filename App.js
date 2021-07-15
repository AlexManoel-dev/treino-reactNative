// import React, { Component } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import Fl from './componentes/flatList'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Usando FlatList</Text>
      <Fl/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  logo: {
    width: 50,
    resizeMode: 'contain'
  }
});