import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import firebase from '../../../firebase/firebaseConfig'
import userdata from '../../api/userdata'
import requests from '../../api/requests'


const SettingScreen = ({navigation}) => {

    const [userPortfolio, setUserPortfolio] = useState()
    const [fetching, setFetching] = useState(false)
    const [currentPositions, setCurrentPositions] = useState([])

    const getUserPortfolio = async () => {
        let response = await userdata.get(requests.userPortfolio)
        let positions = response.data
        setCurrentPositions(positions)
        setUserPortfolio(positions[0])
        setFetching(true)
    }

    const filteredPositions = currentPositions.filter(p => {
        return p.isCash === false
    })

    // const performSell = async (s) => {
    //     let response = await userdata.post(requests.userTransaction, {
    //         "userId": "A00890809",
    //         "symbol": s.symbol,
    //         "qty": -1,
    //         "price": s.value,
    //         "createdOn": new Date()
    //     })
    //     .then(res => console.log(res))
    //     .catch(e => console.log(e))
    // }

    
    //console.log(filteredPositions)

    useEffect(() => {
        getUserPortfolio()
    }, [])


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
            {fetching ? 
                <View>
                <View style={{marginBottom: 10}}>
                    <Text style={styles.symbol}>UserId: {userPortfolio.userId}</Text>
                </View>
                <Text style={{fontSize: 20, fontWeight: '900', color: '#fff'}}>Current Positions</Text>
                {filteredPositions.map(p => 
                    <View style={styles.row}>
                        <Text style={styles.symbol}>{p.symbol}</Text>
                        <Text style={styles.price}>Qty: {p.qty}</Text>
                        <Text style={styles.price}>{p.value} USD</Text>
                        <TouchableOpacity>
                            <Ionicons name="bar-chart" size={24} color='white'/>
                        </TouchableOpacity>
                        <TouchableOpacity >
                        <Ionicons name="md-close-sharp" size={24} color="white" />
                        </TouchableOpacity>
                    </View>)}
                </View>
                :
                <ActivityIndicator size='small' color='#67D9FA' />
            }
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
    price: {
        fontWeight: '200',
        color: '#fff',
        fontSize: 16,
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
