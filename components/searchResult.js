import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const searchResult = ({price}) => {
    return (
        <View>
            <Text>{price}</Text>
        </View>
    )
}

export default searchResult

const styles = StyleSheet.create({})
