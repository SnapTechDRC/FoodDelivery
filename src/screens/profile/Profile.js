import { Image, ScrollView, Text, TextInput, Button, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import DatePicker from 'react-native-date-picker'


const Profile = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View>
            <Image source={require('../../images/Alex.jpg')} style={styles.imagesProfile} />
          </View>
          <View style={styles.names}>
            <Text style={styles.name}>Alexis Senga Ngabo</Text>
            <Text style={styles.role}>Senior Full Stack Developer</Text>
          </View>
          <View style={styles.iconContainer}>
            <FontAwesome name='pencil-square-o' size={30} color={'#b6b2b2'} />
          </View>
        </View>
        <View style={styles.statusContainer}>
          <View>
            <DatePicker
              mode='date'
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
            <Text style={styles.statusTitle}>My Status</Text>
          </View>
          <View style={styles.statusFlex}>
            <View style={[styles.statusBG, { backgroundColor: '#03035a' }]}>
              <Text style={styles.statusText}>🤨 Away</Text>
            </View>
            <View style={[styles.statusBG, { backgroundColor: 'lightblue' }]}>
              <Text style={styles.statusText}>💻 At Work</Text>
            </View>
            <View style={[styles.statusBG, { backgroundColor: '#ffa500a8' }]}>
              <Text style={styles.statusText}>🎮 Gaming</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 10, paddingHorizontal: 5 }}>
          <View>
            <Text>My Accout</Text>
          </View>
          <View style={styles.inputGroup}>
            <View style={styles.leftIcon}>
              <Entypo name='email' size={18} />
            </View>
            <TextInput style={styles.input} placeholder="Email Adress" />
          </View>
          <View style={styles.inputGroup}>
            <View style={styles.leftIcon}>
              <AntDesign name='user' size={18} />
            </View>
            <TextInput style={styles.input} placeholder="Username" />
          </View>
          <View style={styles.inputGroup}>
            <View style={styles.leftIcon}>
              <FontAwesome name='lock' size={18} />
            </View>
            <View style={styles.rightIcon}>
              <FontAwesome name='eye' size={16} />
            </View>
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" />
          </View>
          <View style={styles.inputGroup}>
            <View style={styles.leftIcon} >
              <Entypo name='calendar' size={16} />
            </View>
            <TouchableOpacity style={[styles.input, { marginTop: 13, paddingBottom: 5 }]} onPress={() => setOpen(true)}>
              <Text>Birthday(Optional)</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Joined}>
          <Text><Text style={{ color: '#b6b2b2' }}>joined</Text> 21 Jan 2020</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Profile