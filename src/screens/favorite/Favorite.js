import { Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/Feather'

const Favorite = () => {
  return (
    <View style={styles.container}>
      <Icon name="heart" size={80} color={'orange'} />
    </View>
  )
}

export default Favorite