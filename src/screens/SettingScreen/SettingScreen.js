import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import firebase from '../../../firebase/firebaseConfig'

const SettingScreen = ({navigation}) => {

    const logOut = async () => {
        const response = await firebase.auth().signOut()
        .then(() => console.log('User signed out!'))
        navigation.navigate('Landing')
        .catch(error => {
            console.error(error);
        });
      }

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#16171C'}}>
            <TouchableOpacity 
                style={styles.button}
                onPress={logOut}
            >
                <Text>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    button: {
        height: 48,
        width: 150,
        backgroundColor: '#67D9FA',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 20

    },
})
