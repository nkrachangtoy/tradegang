import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
const LandingScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{alignItems: 'center'}}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Welcom to</Text>
                <Text style={styles.title}>TradeGang</Text>
            </View>
            <View style={styles.buttonsWrapper}>
            <TouchableOpacity style={styles.button} onPress={()=>{
                navigation.navigate('Login')
            }}>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{
                navigation.navigate('Signup')
            }}>
                <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>Signup</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LandingScreen

const styles = StyleSheet.create({
    button: {
        height: 48,
        width: 209,
        backgroundColor: '#67D9FA',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderRadius: 50
    },
    title: {
        fontWeight: "900",
        fontSize: 36,
        color: '#fff'
    },
    headerContainer: {
        position: 'absolute',
        top: 137,
        left: 32,
    },
    buttonsWrapper:{
        flexDirection: 'column',
        position: 'absolute',
        top: 332
    }
})
