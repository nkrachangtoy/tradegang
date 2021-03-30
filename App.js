import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View, Text} from 'react-native'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [data, setData] = useState([])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
