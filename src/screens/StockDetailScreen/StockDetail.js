import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const StockDetail = ({navigation, symbol, currentPrice}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white'}}>Stock Detail!</Text>
            <Text style={{color: 'white'}}>{symbol}</Text>
            <Text style={{color: 'white'}}>{currentPrice}</Text>
            <TouchableOpacity
                onPress={()=>navigation.navigate('TradeModal')}
            >
                <Text style={{color: 'white'}}>Open Trade Modal</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StockDetail

const styles = StyleSheet.create({})
