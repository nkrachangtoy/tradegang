import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from '../../components/loginForm'
import {SafeAreaView} from 'react-native-safe-area-context'

const loginScreen = () => {
    return (
        <SafeAreaView>
            <LoginScreen />
        </SafeAreaView>
    )
}

export default loginScreen

const styles = StyleSheet.create({})
