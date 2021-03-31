import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const searchResult = ({price, symbol}) => {
    return (
        <View style={styles.row}>
            <Text style={styles.symbol}>{symbol}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    )
}

export default searchResult

const styles = StyleSheet.create({
    price: {
        fontWeight: '200',
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    },
    row: {
        height: 48,
        flexDirection: 'row',
        width: "100%",
        backgroundColor: '#1E1F26',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10
    },
    symbol: {
        fontSize: 16,
        fontWeight: '900',
        color: '#fff'
    }
})
