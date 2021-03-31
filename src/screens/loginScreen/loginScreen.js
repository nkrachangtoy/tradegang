import React from 'react'
import LoginScreen from '../../components/loginForm'
import {SafeAreaView} from 'react-native-safe-area-context'

const loginScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <LoginScreen navigation={navigation}/>
        </SafeAreaView>
    )
}

export default loginScreen

