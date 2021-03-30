import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../../components/searchBar'

const searchScreen = () => {
    const [quote, setQuote] = useState('')

    return (
        <View>
            <SearchBar />
        </View>
    )
}

export default searchScreen

const styles = StyleSheet.create({})
