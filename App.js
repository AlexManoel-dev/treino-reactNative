// import React, { Component } from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/favicon.png')}/>
      <Button 
        title='Mostrar Mensagem'
        onPress={() => {
          Alert.alert('Mensagem','Isso é um alerta!')
        }}
      />
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