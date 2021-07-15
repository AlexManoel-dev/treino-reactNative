import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

let sistema 
let cor
export default function (props) {
    sistema = props.os
    cor = props.cor
    return (
        <View>
            <Text style={styles.txt, {color: cor}}>Curso de {props.curso} para {sistema}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        // color: 'red',
        fontSize: 20
    }
})