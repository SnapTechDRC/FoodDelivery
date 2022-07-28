import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'

const Home = () => {
  return (
    <View style={styles.container}>
      <Icon name="home-outline" color={'lightblue'} size={80} />
    </View>
  )
}

export default Home