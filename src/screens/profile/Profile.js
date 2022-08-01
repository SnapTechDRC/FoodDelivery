import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/Feather'

const Profile = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View>
            <Image source={require('../../images/Alex.jpg')} style={styles.imagesProfile} />
          </View>
          <View>
            <Text>Alexis Senga Ngabo</Text>
            <Text>Senior Full Stack Developer</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>My Status</Text>
          </View>
          <View>
            <View>
              <Text>Away</Text>
            </View>
            <View>
              <Text>At Work</Text>
            </View>
            <View>
              <Text>Gaming</Text>
            </View>
          </View>
        </View>
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
        <View>
          <View>
            <Text>Email Adress</Text>
            <TextInput />
          </View>
          <View>
            <Text>Username</Text>
            <TextInput />
          </View>
          <View>
            <Text>Password</Text>
            <TextInput />
          </View>
          <View>
            <Text>Birth Date(Optional)</Text>
            <TextInput />
          </View>
        </View>
        <View>
          <Text>joined</Text>
          <Text>21 Jan 2020</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Profile