import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'


const searchBar = ({symbol, onSymbolChange, onSymbolSubmit}) => {
    

    return (
        <View style={styles.inputBox}>
            <EvilIcons style={styles.icon} name="search" size={24} color='#fff' />
            <TextInput 
            autoCorrect={false}
            style={styles.input} 
            placeholderTextColor="#D8D8D8"
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
      input:{
        color: '#D8D8D8',
        fontSize: 18,
        marginLeft: 15
      },
      icon: {
        alignSelf: 'center',
        marginHorizontal: 15
      },
      inputBox: {
        backgroundColor: "#2E3249",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#4B5378',
        height: 56,
        width: 311,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 17,
        marginBottom: 20
    },
});
