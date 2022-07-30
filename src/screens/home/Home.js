import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
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
            <View style={{marginBottom: 60}}>
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
                        <Image source={require('../../images/fries.jpg')} style={styles.burgerImage} />
                        <View>
                            <Text style={styles.textTitle}>Frites</Text>
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
                        <Image source={require('../../images/chicken.jpg')} style={styles.burgerImage} />
                        <View>
                            <Text style={styles.textTitle}>Chicken</Text>
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
                        <Image source={require('../../images/popcorn.jpg')} style={styles.burgerImage} />
                        <View>
                            <Text style={styles.textTitle}>Pop corn</Text>
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
                        <Image source={require('../../images/salad.png')} style={styles.burgerImage} />
                        <View>
                            <Text style={styles.textTitle}>Salad</Text>
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
                        <Image source={require('../../images/champagne.png')} style={styles.burgerImage} />
                        <View>
                            <Text style={styles.textTitle}>Pop corn</Text>
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
                <View style={{marginTop: 40}}>
                    <ActivityIndicator size={30} color={'darkorange'} />
                </View>
            </View>
        </ScrollView>
        </>
    )
}

export default Home