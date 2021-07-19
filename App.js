// import React, { Component } from 'react';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, ImageBackground, KeyboardAvoidingView, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Pilha = createStackNavigator()

function TelaHome({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Tela Home</Text>
      <TouchableOpacity 
        onPress={()=>navigation.navigate('Canal')}
      >
        <Text>Tela Canal</Text>
      </TouchableOpacity>
    </View>
  )
}

function TelaCanal({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Tela Canal</Text>
      <TouchableOpacity 
        onPress={()=>navigation.navigate('Home')}
      >
        <Text>Tela Home</Text>
      </TouchableOpacity>
      
      <Button
        title='Voltar'
        onPress={()=>navigation.goBack()}
      />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName='TelaHome' headerMode='none'>
        <Pilha.Screen
          name='Home'
          component={TelaHome}
          options={{title:'Tela Inicial'}}
        />
        <Pilha.Screen
          name='Canal'
          component={TelaCanal}
          options={{title:'Tela Canal'}}
        />
      </Pilha.Navigator>
    </NavigationContainer>
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