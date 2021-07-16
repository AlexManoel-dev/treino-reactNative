// import React, { Component } from 'react';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, ImageBackground, KeyboardAvoidingView, TouchableOpacity, StatusBar } from 'react-native';


export default function App() {

  const [cor,setCor] = useState('black')
  const mudaCor = (c) =>{
    setCor(c)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor={cor} 
        barStyle='default'
        hidden={false}
        animated={true}
        networkActivityIndicatorVisible={false} //retira o indicador de internet
        translucent={true} //deixa a barra transparente
      />
      <Text>CFB Cursos</Text>
      <Text>Curso de React Native</Text>
      <TouchableOpacity onPress={()=>{
        mudaCor('red')
      }}>
        <Text>Vermelho</Text>  
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{
        mudaCor('blue')
      }}>
        <Text>Azul</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        mudaCor('green')
      }}>
        <Text>Verde</Text>  
      </TouchableOpacity>
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