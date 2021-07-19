// import React, { Component } from 'react';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, ImageBackground, KeyboardAvoidingView, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import TelaCanal from './componentes/TelaCanal'
// import TelaCanalE from './componentes/TelaCanal'

const Gavetas = createDrawerNavigator()

function TelaHome({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Tela Home</Text>
    </View>
  )
}

// Posso fazer assim, caso queria passar propriedades, como props, navigation e etc. Ou passando o nome do import direto para o navigator
// function TelaCanal({navigation}){
//   return(
//     <TelaCanalE/>
//   )
// }

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
      <Gavetas.Navigator initialRouteName='TelaHome'>
        <Gavetas.Screen
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
        <Gavetas.Screen
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
        <Gavetas.Screen
          name='Cursos'
          component={TelaCursos}
          options={{title:'Tela Cursos'}}
        />
      </Gavetas.Navigator>
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