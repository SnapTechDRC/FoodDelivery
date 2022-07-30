import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const year = new Date().getFullYear();

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} style={styles.ImageBackground}>
                <ImageBackground source={require('../images/food.jpg')}>
                    <Image source={require('../images/Alex.jpg')} style={styles.smallImage} />
                    <View style={{ marginLeft: 5, marginBottom: 5 }}>
                        <Text style={[styles.username, styles.text]}>Alexis Senga Ngabo</Text>
                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <Text style={styles.text}>520 Orders</Text>
                            <FontAwesome5 name='coins' color={'#fff'} size={14} />
                        </View>
                    </View>
                </ImageBackground>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={styles.bottomView}>
                <TouchableOpacity style={{ paddingVertical: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='share-social-outline' color={'rebeccapurple'} size={20} />
                        <Text style={{ fontSize: 15, marginLeft: 30, color: 'rebeccapurple' }}>Share</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="logout" color={'rebeccapurple'} size={20} />
                        <Text style={{ fontSize: 15, marginLeft: 30, color: 'rebeccapurple' }}>Logout</Text>
                    </View>
                </TouchableOpacity>
                <View style={[styles.textGray, { marginTop: 10 }]}>
                    <Text>&copy; SnapTechDrc {year}</Text>
                </View>
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    ImageBackground: {
        marginTop: -5,
    },
    smallImage: {
        borderRadius: 50,
        width: 80,
        height: 80,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 5
    },
    text: {
        color: '#fff',
        paddingRight: 5
    },
    username: {
        fontSize: 18,
        fontWeight: '500'
    },
    bottomView: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    textGray: {
        color: '#ccc'
    }
})