import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// export default class App extends Component{
//   render(){
//     return(
//       <View>
//         <Text>AOOOOOBA</Text>
//       </View>
      
//     );
//   }
// }

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Primeiro texto</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <Text>Segundo texto</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <Text>Terceiro texto</Text>
        <StatusBar style="auto" />
      </View>
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
});