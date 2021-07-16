import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default function(){

    const [cont,setCont] = useState(0)
    const contar = () => {
        setCont(cont + 1)
    }

    return(
        <View>
            <TouchableHighlight 
                style={styles.botao}
                onPress={contar}
                underlayColor='#000'
            >
                <Text>CFB Cursos</Text>
            </TouchableHighlight>
            <TouchableOpacity 
                style={styles.botao}
                onPress={contar}
            >
                <Text>CFB Cursos</Text>
            </TouchableOpacity>
            <TouchableWithoutFeedback 
                style={styles.botao}
                onPress={contar}
                underlayColor='#000'
            >
                <Text>CFB Cursos</Text>
            </TouchableWithoutFeedback>
            <Text>{cont}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        alignItems: 'center',
        backgroundColor: '#ccc',
        padding: 10
    }
})