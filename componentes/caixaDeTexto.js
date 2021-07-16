import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

export default function(){

    const [nome,setNome] = useState('')

    return(
        <View>
            <Text>Digite seu nome:</Text>
            <TextInput 
                style={styles.input}
                value={nome}    
                onChangeText={text=>{
                    setNome(text)}
                }
                autoCapitalize='words'
            />
            <Text>Valor digitado: {nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black'
    }
})