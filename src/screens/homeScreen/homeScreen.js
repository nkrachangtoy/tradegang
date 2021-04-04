import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


// Components
import SearchScreen from '../searchScreen/searchScreen'
import PortfolioScreen from '../portfolioScreen/portfolioScreen'
import WatchlistScreen from '../WatchlistScreen/WatchlistScreen'
const Tab = createBottomTabNavigator()

const homeScreen = () => {
    return (
        <Tab.Navigator screenOptions={{cardStyle: {backgroundColor: '#000'}}}>
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Watchlist" component={WatchlistScreen} />
            <Tab.Screen name="Portfolio" component={PortfolioScreen} />
        </Tab.Navigator>
    )
}

export default homeScreen
