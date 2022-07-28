import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>App</Text>
        <Icon name='rocket' color={'red'} size={60} />
      </View>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})