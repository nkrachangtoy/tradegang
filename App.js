import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import SearchScreen from './src/screens/searchScreen/searchScreen'

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
        <SearchScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App