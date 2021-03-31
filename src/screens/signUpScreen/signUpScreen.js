import React from 'react'
import { StyleSheet} from 'react-native'
import SignUpForm from '../../components/signUpForm'
import {SafeAreaView} from 'react-native-safe-area-context'


const signUpScreen = () => {
    return (
        <SafeAreaView>
            <SignUpForm />
        </SafeAreaView>
    )
}

export default signUpScreen

const styles = StyleSheet.create({})
