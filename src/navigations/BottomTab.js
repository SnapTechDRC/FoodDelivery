import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home/Home';
import Card from '../screens/card/Card';
import Favorite from '../screens/favorite/Favorite';
import Ionicons from "react-native-vector-icons/Ionicons";
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30
                },
                tabBarActiveTintColor: 'orange'
            }}
        >
            <Tab.Screen name='Acceuil' component={Home}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name='home-outline' size={25} color={color} />
                }} />
            <Tab.Screen name='favorite' component={Favorite}
                options={{
                    tabBarIcon: ({color}) => <Ionicons name='heart-outline' size={25} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})