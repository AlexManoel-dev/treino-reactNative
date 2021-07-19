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

      <TouchableOpacity 
        onPress={()=>navigation.navigate('Cursos')}
      >
        <Text>Tela Cursos</Text>
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

function TelaCursos({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Tela Cursos</Text>
      <TouchableOpacity 
        onPress={()=>navigation.navigate('CursoReactNative',{
          aulas:100,autor:'Bruno'
        })}
      >
        <Text>React Native</Text>
      </TouchableOpacity>
      
      <Button
        title='Voltar'
        onPress={()=>navigation.goBack()}
      />
    </View>
  )
}

function TelaCursoReactNative({route,navigation}){

  const {aulas} = route.params
  const {autor} = route.params

  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Curso de React Native</Text>
      <Text>Aulas: {aulas}</Text>
      <Text>Autor: {autor}</Text>
      <TouchableOpacity 
        onPress={()=>navigation.navigate('Home')}
      >
        <Text>React Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={()=>navigation.goBack()}
      >
        <Text>Voltar</Text>
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
      <Pilha.Navigator initialRouteName='TelaHome'>
        <Pilha.Screen
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
        <Pilha.Screen
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
        <Pilha.Screen
          name='Cursos'
          component={TelaCursos}
          options={{title:'Tela Cursos'}}
        />
        <Pilha.Screen
          name='CursoReactNative'
          component={TelaCursoReactNative}
          options={{title:'Tela Cursos'}}
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