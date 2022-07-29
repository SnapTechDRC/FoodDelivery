import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from 'react-native-vector-icons/Entypo'

const Home = ({navigation}) => {
    return (
        <>
        <ScrollView style={styles.container}>
            <View>
                <Image source={require('../../images/foodHome.jpg')} style={styles.ImageHomeTop} />
                <View style={styles.inputGroup}>
                    <Icon name="search" color={'lightgray'} size={22} />
                    <TextInput placeholder='Find your food' style={styles.TextInput} />
                </View>
                <View style={styles.inlineFoodMenu}>
                    <View style={[styles.FoodMenuItems, styles.selected]}>
                        <FontAwesome5 name="hamburger" color={'lightgray'} size={45} />
                        <Text style={styles.textWhite}>Burger</Text>
                    </View>
                    <View style={styles.FoodMenuItems}>
                        <MaterialCommunityIcons name="food-fork-drink" color={'#000'} size={50} />
                        <Text style={styles.textGray}>Drink & Soda</Text>
                    </View>
                    <View style={styles.FoodMenuItems}>
                        <MaterialCommunityIcons name="fruit-watermelon" color={'#000'} size={52} />
                        <Text style={styles.textGray}>Fruits</Text>
                    </View>
                    <View style={styles.FoodMenuItems}>
                        <MaterialCommunityIcons name="bottle-soda-classic-outline" color={'#000'} size={55} />
                        <Text style={styles.textGray}>Beer</Text>
                    </View>
                </View>
                <View style={styles.foodHomeContainer}>
                    <TouchableOpacity style={styles.foodHomeItem} onPress={() => navigation.navigate('SingleItem')}>
                        <Image source={require('../../images/burger.jpg')} style={styles.burgerImage} />
                        <View>
                            <Text style={styles.textTitle}>Best Burger</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={{paddingRight: 20}}>30Mn</Text>
                            <Text>120 Sell</Text>
                        </View>
                        <View style={{marginTop: 5}}>
                            <Text style={styles.priceText}>$ 5.40</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foodHomeItem} onPress={() => navigation.navigate('SingleItem')}>
                        <Image source={require('../../images/burger.jpg')} style={styles.burgerImage} />
                        <View>
                            <Text style={styles.textTitle}>Best Burger</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={{paddingRight: 20}}>30Mn</Text>
                            <Text>120 Sell</Text>
                        </View>
                        <View style={{marginTop: 5}}>
                            <Text style={styles.priceText}>$ 5.40</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foodHomeItem} onPress={() => navigation.navigate('SingleItem')}>
                        <Image source={require('../../images/burger.jpg')} style={styles.burgerImage} />
                        <View>
                            <Text style={styles.textTitle}>Best Burger</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={{paddingRight: 20}}>30Mn</Text>
                            <Text>120 Sell</Text>
                        </View>
                        <View style={{marginTop: 5}}>
                            <Text style={styles.priceText}>$ 5.40</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.foodHomeItem} onPress={() => navigation.navigate('SingleItem')}>
                        <Image source={require('../../images/burger.jpg')} style={styles.burgerImage} />
                        <View>
                            <Text style={styles.textTitle}>Best Burger</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={{paddingRight: 20}}>30Mn</Text>
                            <Text>120 Sell</Text>
                        </View>
                        <View style={{marginTop: 5}}>
                            <Text style={styles.priceText}>$ 5.40</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        </>
    )
}

export default Home