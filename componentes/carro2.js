import React, { useState } from 'react'
import { View, Text, Button, Switch } from 'react-native'

export default function(props){
    const [ligado,setLigado] = useState(true)
    const toggleLigado = ()=>{
        setLigado(!ligado)
    }
    return(
        <View>
            <Text>Carro: {props.nome} - Ligado: {ligado ? 'Sim' : 'Não'}</Text>
                <Switch
                    trackColor={{false:'gray', true:'blue'}}
                    thumbColor={ligado? '#00f' : '#444'}
                    value={ligado}
                    onValueChange={toggleLigado}
                />
        </View>
    )
}