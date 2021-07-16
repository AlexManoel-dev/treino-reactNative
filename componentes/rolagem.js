import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, RefreshControl } from 'react-native'

export default function(){

    const [atualizando,setAtualizando] = useState(false)
    const aoAtualizar = () => {
        setAtualizando(true)

        // Código de atualização
        
        setTimeout(()=>{
            setAtualizando(false)
        },3000) /*3 segundos*/
    }

    return(
        <View style={styles.caixa}>
            <ScrollView 
                style={styles.scroll}
                refreshControl={
                    <RefreshControl
                        refreshing={atualizando}
                        onRefresh={aoAtualizar}
                    />
                }
            >
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non justo sed sapien porttitor gravida. Aliquam erat volutpat. Nulla eros erat, faucibus nec nunc ac, gravida lobortis augue. Praesent sed facilisis tortor, ut convallis lorem. Donec gravida nisl eget nibh malesuada cursus. Phasellus tortor risus, tempor sit amet velit a, pulvinar fringilla leo. Duis ut scelerisque leo. Morbi orci augue, rhoncus et mi ac, eleifend aliquet lorem. Proin mattis dictum suscipit. Proin eget nisl ut massa lobortis varius sit amet a magna. Morbi quis scelerisque nulla, suscipit suscipit orci. Sed eget placerat sem, semper aliquam mi. Cras maximus est eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non justo sed sapien porttitor gravida. Aliquam erat volutpat. Nulla eros erat, faucibus nec nunc ac, gravida lobortis augue. Praesent sed facilisis tortor, ut convallis lorem. Donec gravida nisl eget nibh malesuada cursus. Phasellus tortor risus, tempor sit amet velit a, pulvinar fringilla leo. Duis ut scelerisque leo. Morbi orci augue, rhoncus et mi ac, eleifend aliquet lorem. Proin mattis dictum suscipit. Proin eget nisl ut massa lobortis varius sit amet a magna. Morbi quis scelerisque nulla, suscipit suscipit orci. Sed eget placerat sem, semper aliquam mi. Cras maximus est eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non justo sed sapien porttitor gravida. Aliquam erat volutpat. Nulla eros erat, faucibus nec nunc ac, gravida lobortis augue. Praesent sed facilisis tortor, ut convallis lorem. Donec gravida nisl eget nibh malesuada cursus. Phasellus tortor risus, tempor sit amet velit a, pulvinar fringilla leo. Duis ut scelerisque leo. Morbi orci augue, rhoncus et mi ac, eleifend aliquet lorem. Proin mattis dictum suscipit. Proin eget nisl ut massa lobortis varius sit amet a magna. Morbi quis scelerisque nulla, suscipit suscipit orci. Sed eget placerat sem, semper aliquam mi. Cras maximus est eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non justo sed sapien porttitor gravida. Aliquam erat volutpat. Nulla eros erat, faucibus nec nunc ac, gravida lobortis augue. Praesent sed facilisis tortor, ut convallis lorem. Donec gravida nisl eget nibh malesuada cursus. Phasellus tortor risus, tempor sit amet velit a, pulvinar fringilla leo. Duis ut scelerisque leo. Morbi orci augue, rhoncus et mi ac, eleifend aliquet lorem. Proin mattis dictum suscipit. Proin eget nisl ut massa lobortis varius sit amet a magna. Morbi quis scelerisque nulla, suscipit suscipit orci. Sed eget placerat sem, semper aliquam mi. Cras maximus est eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non justo sed sapien porttitor gravida. Aliquam erat volutpat. Nulla eros erat, faucibus nec nunc ac, gravida lobortis augue. Praesent sed facilisis tortor, ut convallis lorem. Donec gravida nisl eget nibh malesuada cursus. Phasellus tortor risus, tempor sit amet velit a, pulvinar fringilla leo. Duis ut scelerisque leo. Morbi orci augue, rhoncus et mi ac, eleifend aliquet lorem. Proin mattis dictum suscipit. Proin eget nisl ut massa lobortis varius sit amet a magna. Morbi quis scelerisque nulla, suscipit suscipit orci. Sed eget placerat sem, semper aliquam mi. Cras maximus est eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non justo sed sapien porttitor gravida. Aliquam erat volutpat. Nulla eros erat, faucibus nec nunc ac, gravida lobortis augue. Praesent sed facilisis tortor, ut convallis lorem. Donec gravida nisl eget nibh malesuada cursus. Phasellus tortor risus, tempor sit amet velit a, pulvinar fringilla leo. Duis ut scelerisque leo. Morbi orci augue, rhoncus et mi ac, eleifend aliquet lorem. Proin mattis dictum suscipit. Proin eget nisl ut massa lobortis varius sit amet a magna. Morbi quis scelerisque nulla, suscipit suscipit orci. Sed eget placerat sem, semper aliquam mi. Cras maximus est eu.
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    caixa: {
        flex: 1
    },
    scroll: {
        backgroundColor: 'gray',
        padding: 15
    },
    txt: {
        color: '#eee'
    }
})