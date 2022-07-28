import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/home/Home';
import Setting from '../screens/setting/Setting';
import Notification from '../screens/notifications/Notification';
import History from '../screens/history/History';
import Profile from '../screens/profile/Profile';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,
                drawerActiveBackgroundColor: 'darkorange',
                drawerActiveTintColor: '#fff',
                drawerLabelStyle: {
                    fontSize: 15,
                    fontWeight: '500'
                },
                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => alert('This is a button!')}
                        style={{marginRight: 20}}
                    >
                        <AntDesign name="bells" size={20} color={'black'} />
                    </TouchableOpacity>
                )
            }}
        >
            <Drawer.Screen name='Home' component={Home} options={{ drawerIcon: ({ color }) => <Ionicons name="home-outline" size={20} color={color} /> }} />
            <Drawer.Screen name='Profile' component={Profile} options={{ drawerIcon: ({ color }) => <Feather name="user" size={20} color={color} /> }} />
            <Drawer.Screen name='Notification' component={Notification} options={{ drawerIcon: ({ color }) => <AntDesign name="bells" size={20} color={color} /> }} />
            <Drawer.Screen name='History' component={History} options={{ drawerIcon: ({ color }) => <Icon name="history" size={23} color={color} /> }} />
            <Drawer.Screen name='Setting' component={Setting} options={{ drawerIcon: ({ color }) => <Ionicons name="cog" size={24} color={color} /> }} />
        </Drawer.Navigator>
    )
}

export default DrawerNav

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 50,
        right: 0,
        top: -3
    }
})