// import React, { Component } from 'react';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Fl from './componentes/flatList'

const img = './assets/bgApp.png'

export default function App() {

  const [ligado,setLigado] = useState(false)

  return (
    <View style={styles.container}>
        {/* <ImageBackground source={require(img)} style={styles.imagemFundo}>
        <Text>Usando FlatList</Text>
        <Fl/>
      </ImageBackground> */}
      <Button 
        title={ligado?'Desligar':'Ligar'}
        onPress={()=>setLigado(!ligado)}
      />
          
      {ligado?
        <View>
          <Text>CFB Cursos</Text>
          <Text>Curso de React Native</Text>
        </View>  
        :
        <Text> * * * </Text>
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
  }
});