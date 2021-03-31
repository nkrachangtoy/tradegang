import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

// Screens
import SearchScreen from './src/screens/searchScreen/searchScreen'
import SignUpScreen from './src/screens/signUpScreen/signUpScreen'
import LoginScreen from './src/screens/loginScreen/loginScreen'
import homeScreen from './src/screens/homeScreen/homeScreen'
const App = () => {

  return (
    <SafeAreaProvider style={styles.container}>
        {/* <SearchScreen /> */}
        {/* <SignUpScreen /> */}
        <LoginScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App