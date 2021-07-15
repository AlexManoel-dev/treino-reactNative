import React from 'react'
import { View, Text} from 'react-native'
import styles from '../estilos/style'

export default function(){
    return(
        <View>
            <Text style={styles.texto}>Terceiro componente</Text>
        </View>
    )
}

// const styles = StyleSheet.create({
//     text: {
//         color: 'red',
//         fontSize: 45
//     }
// })