import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

// Components
import SearchScreen from '../searchScreen/searchScreen'
import SettingScreen from '../SettingScreen/SettingScreen'
import WatchlistScreen from '../WatchlistScreen/WatchlistScreen'

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if(route.name === 'Search'){
                        iconName = focused
                        ? 'search'
                        : 'search-outline'
                    }else if(route.name === 'Watchlist'){
                        iconName = focused ? 'list' : 'list-outline'
                    }else if (route.name === 'Setting'){
                        iconName = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
            initialRouteName="Search"
            tabBarOptions={{
                activeTintColor: '#487FD9',
                inactiveTintColor: 'grey',
            }}
        >
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Watchlist" component={WatchlistScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
    )
}

export default HomeScreen
