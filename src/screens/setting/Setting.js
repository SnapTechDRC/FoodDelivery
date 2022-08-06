import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Antdesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Setting = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ marginTop: 10, marginLeft: 10 }}>
          <Text>
            <Text style={{ color: '#b6b2b2' }}>Parameter</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.row}>
          <View style={[styles.iconContainer, { backgroundColor: '#2fcd7d' }]}>
            <MaterialIcons name='payment' size={22} color="#e3ebe7" />
          </View>
          <View>
            <Text style={styles.title}>Payments</Text>
          </View>
          <View style={[styles.left, styles.BGBlue]}>
            <Text style={{ color: 'white' }}>2 News </Text>
            <Antdesign name='right' size={18} color='white' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <View style={[styles.iconContainer, { backgroundColor: '#f9e500' }]}>
            <FontAwesome name='first-order' size={20} color='#e3ebe7' />
          </View>
          <View>
            <Text style={styles.title}>Achievements</Text>
          </View>
          <View style={styles.left}>
            <Antdesign name='right' size={18} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <View style={[styles.iconContainer, { backgroundColor: 'lightgray' }]}>
            <MaterialIcons name='privacy-tip' size={22} color="#e3ebe7" />
          </View>
          <View>
            <Text style={styles.title}>Privacy</Text>
          </View>
          <View style={[styles.left, styles.BGOrange]}>
            <Text style={{ color: 'white' }}>Actions Nested</Text>
            <Antdesign name='right' size={18} color='white' />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text>
          <Text style={{ color: '#b6b2b2' }}>Account</Text>
        </Text>
        <View>
          <TouchableOpacity><Text style={{fontSize: 15, color: 'blue', marginVertical: 5, fontWeight: '500'}}>Switch to an other account</Text></TouchableOpacity>
          <TouchableOpacity><Text style={{fontSize: 15, color: 'darkorange', fontWeight: '500'}}>Logout</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Setting