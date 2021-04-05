import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

const WatchlistScreen = () => {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#16171C'}}>
            <Text style={{color: 'white'}}>Watchlist!</Text>
        </SafeAreaView>
    )
}

export default WatchlistScreen

const styles = StyleSheet.create({})
