import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

// Requests endpoint
import requests from './requests'
import axios from './axios'

export default function App() {
  const [stocks, setStocks] = useState([])

  const getStocks = async () => {
      const request = await axios.get(`/stock/symbol?exchange=US&token=${process.env.API_KEY}`)
      //console.log(request.data)
      setStocks(request.data)
      //console.log(stocks)
  }

  useEffect(() => {
    getStocks();
  }, [])

  return (
    <SafeAreaView>
      <FlatList 
        data={stocks}
        keyExtractor={stock=> stock.symbol}
        renderItem={({ item }) => {
          return <Text>{item.description}</Text>
        }}
      />
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
