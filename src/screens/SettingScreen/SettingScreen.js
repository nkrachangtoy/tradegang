import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import firebase from '../../../firebase/firebaseConfig'
import userdata from '../../api/userdata'
import requests from '../../api/requests'
import { set } from 'react-native-reanimated'

const SettingScreen = ({navigation}) => {

    const [userPortfolio, setUserPortfolio] = useState()
    const [fetching, setFetching] = useState(false)

    const getUserPortfolio = async () => {
        let result = await userdata.get(requests.userPortfolio)
        let userData = result.data[0]
        setUserPortfolio(userData)
        console.log(userPortfolio)
    }

    useEffect(() => {
        getUserPortfolio()
    }, [])

    //console.log(userPortfolio.userId)

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
            {fetching ? <Text>Loading..</Text> :  <View>
                <Text style={{color: 'white'}}>UserId: {userPortfolio.userId}</Text>
                <Text style={{color: 'white'}}>Value: ${userPortfolio.value}</Text>
            </View>}
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
