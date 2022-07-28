import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/home/Home';
import Setting from '../screens/setting/Setting';
import Notification from '../screens/notifications/Notification';
import History from '../screens/history/History';
import Profile from '../screens/profile/Profile';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from "react-native-vector-icons/AntDesign";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerLabelStyle: {
                    fontSize: 15,
                    fontWeight: '500'
                }
            }}
        >
            <Drawer.Screen name='Home' component={Home} options={{drawerIcon: ({color}) => <Ionicons name="home-outline" size={20} color={color} />}} />
            <Drawer.Screen name='Profile' component={Profile} options={{drawerIcon: ({color}) => <Feather name="user" size={20} color={color} />}} />
            <Drawer.Screen name='Notification' component={Notification} options={{drawerIcon: ({color}) => <AntDesign name="bells" size={20} color={color} />}} />
            <Drawer.Screen name='History' component={History} options={{drawerIcon: ({color}) => <Icon name="history" size={23} color={color} />}} />
            <Drawer.Screen name='Setting' component={Setting} options={{drawerIcon: ({color}) => <Ionicons name="cog" size={24} color={color} />}} />
        </Drawer.Navigator>
    )
}

export default DrawerNav

const styles = StyleSheet.create({})