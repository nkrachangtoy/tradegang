import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import firebase from '../../firebase/firebaseConfig'


const loginForm = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const Login = async () => {
        const response = await firebase.auth().signInWithEmailAndPassword(email.trim(), password)
        .then(() => {
            console.log('User account signed in!');
            navigation.navigate('Home')
        })
        .catch(error => {
            console.error(error);
        });
    }
    return (
        <SafeAreaView >
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.title}>TradeGang</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputBox}>
                    <AntDesign name="user" size={24} style={styles.icons} />
                    <TextInput 
                        autoCapitalize={false}
                        value={email}
                        placeholder='Email' 
                        style={styles.input} 
                        placeholderTextColor="#D8D8D8"
                        onChangeText={text => {setEmail(text)}}
                    >
                </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <MaterialCommunityIcons name="email-outline" size={24} style={styles.icons} />
                    <TextInput 
                        value={password}
                        placeholder='Password' 
                        style={styles.input} 
                        placeholderTextColor="#D8D8D8" 
                        secureTextEntry={true}
                        onChangeText={text => {setPassword(text)}}
                    >
                </TextInput>
                </View>
                <Text style={{color: '#fff', fontSize: 16}}>Forgot password?</Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>Login()}
                >
                    <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>{
                navigation.navigate('Signup')
                }}>
                <Text style={styles.link}>Don't have an account? Signup</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default loginForm

const styles = StyleSheet.create({
    title: {
        fontWeight: "900",
        fontSize: 36,
        color: '#fff'
    },
    subTitle: {
        color: '#D8D8D8',
        fontSize: 18,
    },
    link: {
        color: '#99E6FC',
        fontSize: 16
    },
    headerContainer: {
        position: 'absolute',
        top: 137,
        left: 32,
    },
    formContainer: {
        position: 'absolute',
        left: 32,
        top: 285,
        flex: 1,
    },
    input: {
        color: '#D8D8D8',
        fontSize: 18,
        marginLeft: 15
    },
    icons: {
        color: '#99E6FC'
    },
    inputBox: {
        backgroundColor: "#2E3249",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#4B5378',
        height: 56,
        width: 311,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 17,
        marginBottom: 20
    },
    button: {
        flex: 1,
        height: 48,
        backgroundColor: '#67D9FA',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 20

    },

})

