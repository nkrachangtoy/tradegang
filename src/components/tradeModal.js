import React from 'react'
import { View, Text, Button } from 'react-native'

const tradeModal = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Buy or Sell</Text>
            <Button onPress={()=> navigation.goBack()} title='go back' />
        </View>
    )
}

export default tradeModal
