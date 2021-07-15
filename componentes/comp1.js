import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

let cor
export default function(props) {
    cor = props.cor
    return(
        <Text style={styles.txt}>Curso de {props.curso} para {props.os}</Text>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 25,
        color: 'black'
    }
})