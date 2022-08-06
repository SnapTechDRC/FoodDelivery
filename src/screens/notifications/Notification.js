import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from 'react-native-vector-icons/Octicons'

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.screenTitle}>Notifications</Text>
        </View>
        <View>
        <TouchableOpacity style={{marginRight: 10}}>
          <Text style={styles.markRead}>
            <Ionicons name='ios-checkmark-done-outline' size={22} color="blue" />
            Mark as read
          </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.card}>
          <View style={{marginRight: 10}}>
            <Octicons name="dot-fill" size={22} color="orange" />
          </View>
          <View>
            <View>
              <Text>
                Thank fro booking a meeting with us, 20/08 7:00 AM 
              </Text>
            </View>
            <View>
              <Text>Aug 10, 2022 at 09:05 AM</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={{marginRight: 10}}>
            <Octicons name="dot-fill" size={22} color="orange" />
          </View>
          <View>
            <View>
              <Text>
                Thank fro booking a meeting with us, 20/08 7:00 AM 
              </Text>
            </View>
            <View>
              <Text>Aug 10, 2022 at 09:05 AM</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={{marginRight: 10}}>
            <Octicons name="dot-fill" size={22} color="orange" />
          </View>
          <View>
            <View>
              <Text>
                Thank fro booking a meeting with us, 20/08 7:00 AM 
              </Text>
            </View>
            <View>
              <Text>Aug 10, 2022 at 09:05 AM</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={{marginRight: 10}}>
            <Octicons name="dot-fill" size={22} color="orange" />
          </View>
          <View>
            <View>
              <Text>
                Thank fro booking a meeting with us, 20/08 7:00 AM 
              </Text>
            </View>
            <View>
              <Text>Aug 10, 2022 at 09:05 AM</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={{marginRight: 10}}>
            <Octicons name="dot-fill" size={22} color="orange" />
          </View>
          <View>
            <View>
              <Text>
                Thank fro booking a meeting with us, 20/08 7:00 AM 
              </Text>
            </View>
            <View>
              <Text>Aug 10, 2022 at 09:05 AM</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.absolute}>
        <TouchableOpacity><Text style={{color: 'blue'}}>View old notifications</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Notification