import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import C1 from './componentes/comp1' //componente1 importado
// import C2 from './componentes/comp2' //componente2 importado
// import C3 from './componentes/comp3' //componente3 importado
import Caixas from './componentes/caixas'

// const exibir = (vp1) => {
//   if(vp1 == true){
//     return(<Text>Curso de React Native</Text>)
//   }
//   else{
//     return(<Text> - - - </Text>)
//   }
// }

//Componente de função
//Com o componente externo
export default function App() {
  let valorExibir = true
  return (
    <View style={styles.container}>
      <Caixas exibir={valorExibir}/>
      {/* <C1 curso='React Native' os='Android' cor='#f00'/> 
      <C2 curso='Desenvolvimento Mobile' os='IOS' cor='#0ff'/>
      <C3/> */}
      {/* Exibindo direto */}
      {valorExibir?(<Text>Curso de React Native</Text>):(<Text> - - - </Text>)}
      {/* Maneira simples de fazer uma condição, se for false nem vai fazer nada. Mas caso for true vai parar no começo */}
      {valorExibir && (<Text>Curso de React Native</Text>)}
      {/* {exibir(true)} */}
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