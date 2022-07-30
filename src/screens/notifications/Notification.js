import { Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from "react-native-vector-icons/AntDesign";

const Notification = () => {
  return (
    <View style={styles.container}>
      <Icon name="bells" size={80} color={'orange'} />
    </View>
  )
}

export default Notification