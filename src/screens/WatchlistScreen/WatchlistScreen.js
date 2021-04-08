import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
// API
import userdata from '../../api/userdata'
import requests from '../../api/requests'

const WatchlistScreen = ({navigation}) => {
    const [list, setList] = useState([])
    const [fetching, setFetching] = useState(false)

    const getWatchlist = async () => {
        let response = await userdata.get(requests.userWatchlist)
        setList(response.data)
        setFetching(true)
    }

    const deleteItem = async (x) => {
        try{
            let response = await userdata.delete(requests.watchlist, {
                "userId": "A00948735",
                "symbol": x
            })
        }catch(e){
            console.log(e)
        }
        alert(`${x} removed from watchlist`)
    }

    useEffect(() => {
        getWatchlist()
    })

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#16171C'}}>
            <Text style={{fontSize: 20, fontWeight: '900', color: '#fff'}}>Watchlist</Text>
            {fetching ? 
            <View>
                {list.map(w => 
                <View style={styles.row}>
                    <Text style={styles.symbol}>{w.symbol}</Text>
                    <TouchableOpacity onPress={()=>deleteItem(w.symbol)}>
                        <Ionicons name="md-close-sharp" size={24} color="white" />
                    </TouchableOpacity>
                </View>)}
            </View> : <ActivityIndicator size='small' color='#67D9FA' />}
        </SafeAreaView>
    )
}

export default WatchlistScreen

const styles = StyleSheet.create({
    price: {
        fontWeight: '200',
        color: '#fff',
        fontSize: 12,
        fontWeight: '500'
    },
    row: {
        height: 48,
        flexDirection: 'row',
        width: "100%",
        backgroundColor: '#1E1F26',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 15
    },
    symbol: {
        fontSize: 16,
        fontWeight: '900',
        color: '#fff'
    }
})
