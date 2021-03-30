import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

// Requests endpoint
import axios from './axios'

const App = () => {
  const [currentPrice, setcurrentPrice] = useState('')
  const [symbol, setSymbol] = useState('gme')
  // const [newQuote, setNewQuote] = useState('')


  const searchAPI = async () => {
    const request = await axios.get(`/quote?symbol=${symbol.toUpperCase()}&token=c1h5do748v6t9ghtn9l0`)
    //console.log(request.data)
    setcurrentPrice(request.data.c)
  }

  useEffect(() => {
    searchAPI();
  }, [])
 

  return (
    <SafeAreaView>
      <View style={styles.background}>
        {/* <TextInput 
        value={quote}
        style={styles.input}
        placeholder='search'
        onChangeText={newQuote => setQuote(newQuote)}
        /> */}
        <Text>{currentPrice}</Text>
      </View>
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
  input: {
    flex: 1
  },
  background: {
    height: 50,
    borderRadius: 6,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
});

export default App