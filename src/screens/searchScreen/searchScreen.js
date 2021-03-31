import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Components
import SearchBar from '../../components/searchBar'
import SearchResult from '../../components/searchResult'

// Requests endpoint
import finnhub from '../../api/finnhub'
import requests from '../../api/requests'

const searchScreen = () => {
    const [symbol, setSymbol] = useState('')
    const [currentPrice, setcurrentPrice] = useState('')
  
  
    const searchAPI = async () => {
      // const request = await finnhub.get(requests.searchBySymbol`${symbol.toUpperCase()}`)
      const request = await finnhub.get(`/quote?symbol=${symbol.toUpperCase()}`)
      //console.log(request.data)
      setcurrentPrice(request.data.c)
    }

    //console.log(currentPrice)
  
    useEffect(() => {
      searchAPI();
    }, [])

    return (
        <View style={styles.background}>
            <SearchBar 
                autoCorrect={false}
                round
                symbol={symbol}
                onSymbolChange={newSymbol => setSymbol(newSymbol)}
                // pass the api call trigger as a prop 
                onSymbolSubmit={() => searchAPI()}
            />
            <SearchResult price={currentPrice}/>
        </View>
    )
}

export default searchScreen

const styles = StyleSheet.create({
    background: {
        height: 50,
        borderRadius: 6,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
      },
})
