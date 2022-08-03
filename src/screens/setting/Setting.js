import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'

const Setting = () => {
  return (
    <View style={styles.container}>
      <Icon name="cog-outline" color={'orange'} size={80} />
      <View>
          <View>
            <Text>
              <Text>Parameter</Text>
            </Text>
          </View>
          <View>
            <View>
              <Text>Icon</Text>
            </View>
            <View>
              <Text>Payments</Text>
            </View>
            <View>
              <Text>2 News</Text>
            </View>
          </View>
          <View>
            <View>
              <Text>Icon</Text>
            </View>
            <View>
              <Text>Achievements</Text>
            </View>
            <View>
              <Text>Icon</Text>
            </View>
          </View>
          <View>
            <View>
              <Text>Icon</Text>
            </View>
            <View>
              <Text>Privacy</Text>
            </View>
            <View>
              <Text>Actions Nested</Text>
            </View>
          </View>
        </View>
    </View>
  )
}

export default Setting