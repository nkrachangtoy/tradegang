import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';


// Screens
import SearchScreen from './src/screens/searchScreen/searchScreen'
import SignUpScreen from './src/screens/signUpScreen/signUpScreen'
import LoginScreen from './src/screens/loginScreen/loginScreen'
import HomeScreen from './src/screens/homeScreen/homeScreen'

const Stack = createStackNavigator()

const App = () => {

  return (
    <SafeAreaProvider >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          cardStyle: { backgroundColor: '#000' }
        }}
        >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Signup" component={SignUpScreen} options={{
          headerShown: false
        }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App
