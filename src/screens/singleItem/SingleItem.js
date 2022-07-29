import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Button, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from 'react-native-vector-icons/Entypo'

const SingleItem = ({ navigation }) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <Image source={require('../../images/burger.jpg')} style={styles.ImageSingleProduct} />
          <View style={styles.divider}>
          </View>
          <View style={styles.productTitleDetail}>
            <View>
              <Text style={styles.productTitle}>Beef Burger</Text>
              <Text style={styles.productSubTitle}>Cheesy Moxarella</Text>
            </View>
            <View style={styles.quantity}>
              <Entypo name='minus' size={22} color={'#b6b2b2'} />
              <Text style={styles.number}>4</Text>
              <Entypo name='plus' size={22} />
            </View>
          </View>
          <View style={styles.nutriment}>
            <View>
              <Text style={styles.titleGray}>Size</Text>
              <Text style={styles.titleWeight}>Medium</Text>
            </View>
            <View>
              <Text style={styles.titleGray}>Calories</Text>
              <Text style={styles.titleWeight}>150Kcal</Text>
            </View>
            <View>
              <Text style={styles.titleGray}>Cooking</Text>
              <Text style={styles.titleWeight}>5-10 Min</Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.longTextGray}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
            </Text>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read more</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.checkoutContainer}>
        <Text style={styles.price}>$ 25.80</Text>
        <TouchableOpacity style={styles.buttonCheckout}>
          <Text style={styles.innerButton}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default SingleItem