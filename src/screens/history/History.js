import { View } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const History = () => {
  return (
    <View style={styles.container}>
      <Icon name="history" color={'lightblue'} size={80} />
    </View>
  )
}

export default History