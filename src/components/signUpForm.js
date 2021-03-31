import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
//import  auth  from '@react-native-firebase/auth'
import firebase from '../../firebase/firebaseConfig'
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

const signUpForm = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const signUp = async () => {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
            navigation.navigate('Login')
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });
    }



    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Sign up</Text>
                <Text style={styles.subTitle}>Already have an account?</Text>
                <TouchableOpacity  onPress={()=>{
                navigation.navigate('Login')
                }}>
                <Text style={styles.link}>Sign in</Text>
                </TouchableOpacity>
                
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputBox}>
                    <AntDesign name="user" size={24} style={styles.icons} />
                    <TextInput 
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
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{signUp()}}
                >
                    <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default signUpForm

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
        fontSize: 18
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
        borderRadius: 50
    },
})
