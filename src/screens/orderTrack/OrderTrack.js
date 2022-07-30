import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Button, Pressable, StatusBar } from 'react-native'
import React from 'react'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MapView from 'react-native-maps';
import Feather from 'react-native-vector-icons/Feather'

const OrderTrack = ({ navigation }) => {
    return (
        <>
            <ScrollView style={styles.container}>
                <View>
                    {/* <MapView
                        style={{ width: '100%', height: 5000 }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    /> */}
                    <Image style={styles.ImageSingleProduct} source={require('../../images/map.png')} />
                    <View style={styles.customHeader}>
                        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.navigate('SingleItem')}>
                            <MaterialIcons name='keyboard-backspace' size={33} color={'#fff'} />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.headerText}>Order Track</Text>
                        </View>
                    </View>
                    <View style={styles.divider}>
                    </View>
                    <View style={styles.deliverSection}>
                        <View>
                            <Image source={require('../../images/Alex.jpg')} style={styles.userImage} />
                        </View>
                        <View style={styles.deliverIdentity}>
                            <Text style={styles.deliverName}>Alexis Senga Ngabo</Text>
                            <Text style={styles.deliverAdress}>Keshero, Av. Confer 20</Text>
                        </View>
                        <View style={styles.deliverPhone}>
                            <View style={styles.iconContainer}><MaterialIcons name="call" size={22} color={'#fff'} /></View>
                            <View style={[styles.iconContainer, {marginLeft: 20}]}><Feather color={'#fff'} name="message-square" size={22} /></View>
                        </View>
                    </View>
                    <View style={styles.onWayContainer}>
                        <View style={styles.dotContainer}>
                            <MaterialIcons name='circle' color={'darkorange'} />
                        </View>
                        <View style={styles.onWay}>
                            <Text style={styles.onWayTextBig}>On the way &nbsp;&nbsp;&nbsp; <Text style={styles.coloredText}>25 Mins</Text></Text>
                            <Text style={styles.onWayTextSmall}>Himbi, Av de la mission 45</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ marginBottom: 5, marginHorizontal: 10 }}>
                <TouchableOpacity style={styles.buttonOrder}>
                    <Text style={styles.innerButton}>Make an order</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default OrderTrack