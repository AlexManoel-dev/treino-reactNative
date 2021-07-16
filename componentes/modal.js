import React, { useState } from 'react'
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity } from 'react-native'

export default function(){

    const [visivel,setVisivel] = useState(true)

    return(
        <View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={visivel}
            >
                <View style={styles.modal}>
                    <Text style={styles.textoModal}>Texto Modal</Text>
                    <TouchableOpacity 
                        onPress={()=>setVisivel(false)}
                        style={styles.btn}
                    >
                        <Text>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <TouchableOpacity 
                onPress={() => {
                    setVisivel(true)
                }}
            >
                <Text>Mostrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#000',
        margin: 20,
        padding: 20,
        borderRadius: 20,
        elevation: 10
    },
    textoModal: {
        color: 'white'
    },
    btn: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#1E90FF',
        color: 'white',
        alignItems: 'center',
        width: '100%'
    }
})