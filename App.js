// import React, { Component } from 'react';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Fl from './componentes/flatList'

const img = './assets/bgApp.png'

export default function App() {

  const [ligado,setLigado] = useState(true)

  return (
    <View style={styles.container}>
        {/* <ImageBackground source={require(img)} style={styles.imagemFundo}>
        <Text>Usando FlatList</Text>
        <Fl/>
      </ImageBackground> */}
      <Button 
        title={'Textinho'}
        // title={ligado?'Desligar':'Ligar'}
        onPress={()=>setLigado(!ligado)}
      />
          
      {ligado?
        <View style={styles.testeView}>
          <Text>CFB Cursos</Text>
          <Text>Curso de React Native</Text>
        </View>  
        :
        <View style={styles.testeView2}>
          <Text> * * * </Text>
        </View>
      }
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