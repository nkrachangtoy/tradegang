import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

const signUpForm = ({navigation}) => {
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
                    <TextInput placeholder='Email' style={styles.input} placeholderTextColor="#D8D8D8">
                </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <MaterialCommunityIcons name="email-outline" size={24} style={styles.icons} />
                    <TextInput placeholder='Password' style={styles.input} placeholderTextColor="#D8D8D8" secureTextEntry={true}>
                </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <Ionicons name="key-outline" size={24} style={styles.icons} />
                    <TextInput placeholder='Confirm Password' style={styles.input} placeholderTextColor="#D8D8D8" secureTextEntry={true}>
                </TextInput>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                >
                    <Text style={{color: '#fff', fontSize: 16, fontWeight: '500'}}>Login</Text>
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
