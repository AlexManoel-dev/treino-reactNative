import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import C1 from './componentes/comp1' //componente1 importado
// import C2 from './componentes/comp2' //componente2 importado
// import C3 from './componentes/comp3' //componente3 importado
import Caixas from './componentes/caixas'

//Componente de função
//Com o componente externo
export default function App() {
  return (
    <View style={styles.container}>
      <Caixas/>
      {/* <C1 curso='React Native' os='Android' cor='#f00'/> 
      <C2 curso='Desenvolvimento Mobile' os='IOS' cor='#0ff'/>
      <C3/> */}
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

//Componente de função
//Sem o componente externo
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View>
//         <Text>Primeiro texto</Text>
//         <StatusBar style="auto" />
//       </View>
//       <View>
//         <Text>Segundo texto</Text>
//         <StatusBar style="auto" />
//       </View>
//       <View>
//         <Text>Terceiro texto</Text>
//         <StatusBar style="auto" />
//       </View>
//     </View>
//   );
// }

//Componente de classe
// export default class App extends Component{
//   render(){
//     return(
//       <View>
//         <Text>AOOOOOBA</Text>
//       </View>
      
//     );
//   }
// }