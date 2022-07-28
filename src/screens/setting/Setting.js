import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'

const Setting = () => {
  return (
    <View style={styles.container}>
      <Icon name="cog-outline" color={'lightblue'} size={80} />
    </View>
  )
}

export default Setting