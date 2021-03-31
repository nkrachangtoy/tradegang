import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import firebase from './firebase/firebaseConfig'
import {Button} from 'react-native'


// Screens
import SearchScreen from './src/screens/searchScreen/searchScreen'
import SignUpScreen from './src/screens/signUpScreen/signUpScreen'
import LoginScreen from './src/screens/loginScreen/loginScreen'
import HomeScreen from './src/screens/homeScreen/homeScreen'

const Stack = createStackNavigator()

const App = () => {

  const logOut = async () => {
    const response = await firebase.auth().signOut()
    .then(() => console.log('User signed out!'))

    .catch(error => {
        console.error(error);
    });
  }

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
        <Stack.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          title: 'Search',
          headerStyle: {
            backgroundColor: '#16171C'
          },
          headerTintColor: '#fff',
          headerLeft: null,
          headerRight: () => (
            <Button
              onPress={() => logOut()}
              title="Logout"
            />
          )}}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App
