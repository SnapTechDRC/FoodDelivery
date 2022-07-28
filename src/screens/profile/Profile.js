import { Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/Feather'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Icon name="user" size={80} color={'lightblue'} />
    </View>
  )
}

export default Profile