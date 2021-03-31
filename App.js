import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'

// Screens
import SearchScreen from './src/screens/searchScreen/searchScreen'
import SignUpScreen from './src/screens/signUpScreen/signUpScreen'

const App = () => {

  return (
    <SafeAreaProvider style={styles.container}>
        {/* <SearchScreen /> */}
        <SignUpScreen />
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