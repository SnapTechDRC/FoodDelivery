import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerNav from './src/navigations/DrawerNav';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})