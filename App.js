// import React, { Component } from 'react';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, ImageBackground, KeyboardAvoidingView, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Guias = createBottomTabNavigator()

function TelaHome({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Tela Home</Text>
    </View>
  )
}

function TelaCanal({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Tela Canal</Text>
    </View>
  )
}

function TelaCursos({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Tela Cursos</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Guias.Navigator initialRouteName='TelaHome'>
        <Guias.Screen
          name='Home'
          component={TelaHome}
          options={{
            title:'Tela Inicial',
            headerStyle:{
              backgroundColor: '#008'
            },
            headerTintColor: '#fff',
            headerRight:()=>(
              <Button
                title='Cursos'
                color='black'
                onPress={
                  () => {
                    alert('Botão Cursos Clicado')
                  }
                }
              />
            )
          }}
        />
        <Guias.Screen
          name='Canal'
          component={TelaCanal}
          options={{
            title:'Tela Canal',
            headerStyle:{
              backgroundColor: '#008'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold'
            }
          }}
        />
        <Guias.Screen
          name='Cursos'
          component={TelaCursos}
          options={{title:'Tela Cursos'}}
        />
      </Guias.Navigator>
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