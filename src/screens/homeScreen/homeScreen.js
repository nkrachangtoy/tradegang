import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
const homeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
            <Text>This is home screen</Text>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Login')
            }}>
                <Text>Login Page</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Signup')
            }}>
                <Text>Signup Page</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default homeScreen

const styles = StyleSheet.create({})
