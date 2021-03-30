import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'


const searchBar = () => {
    return (
        <View>
            <TextInput placeholder="search"/>
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
