import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import userdata from '../../api/userdata'
import requests from '../../api/requests'
import { set } from 'react-native-reanimated'

const StockDetail = ({navigation, route}) => {
    const {symbol, price, name} = route.params
    const [qty, setQty] = useState(1)

    const performBuy = async () => {
        // console.log(symbol, price)
        try{
            let response = await userdata.post(requests.userTransaction, {
                "userId": "A00890809",
                "symbol": symbol,
                "qty": qty,
                "price": price,
                "createdOn": new Date()
            })
            console.log(response)
        }catch(error){
            console.log(error)
        }      
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>Symbol: {symbol}</Text>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>Price: {price}</Text>
            {/* <TouchableOpacity
                onPress={()=>navigation.navigate('TradeModal')}
            >
                <Text style={{color: 'white'}}>Open Trade Modal</Text>
            </TouchableOpacity> */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={()=> setQty(q=>q+1)}>
                    <Ionicons name="chevron-up-circle-outline" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{color: 'white', fontSize: 16, fontWeight: '500', marginLeft: 5, marginRight: 5}}>{qty}</Text>
                <TouchableOpacity onPress={()=> setQty(q=>q-1)}>
                    <Ionicons name="chevron-down-circle-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={()=>performBuy()}>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>Buy</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StockDetail

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        backgroundColor: '#67D9FA',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 10,
    },
})
