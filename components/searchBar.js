import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'


const searchBar = ({symbol, onSymbolChange, onSymbolSubmit}) => {
    

    return (
        <View style={styles.background}>
            <EvilIcons style={styles.icon} name="search" size={35} />
            <TextInput 
            //style={styles.input}
            value={symbol}
            placeholder="Search"
            // when the text changes update the state variable
            onChangeText={newSymbol => onSymbolChange(newSymbol)}
            onSubmitEditing={() => onSymbolSubmit()}
            />
        </View>
    )
}

export default searchBar

const styles = StyleSheet.create({
    background: {
        height: 50,
        borderRadius: 6,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
      },
      input: {
        flex: 1
      },
      icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
      }
});
