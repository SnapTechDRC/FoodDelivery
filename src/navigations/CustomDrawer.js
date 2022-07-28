import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} style={styles.ImageBackground}>
                <ImageBackground source={require('../images/foodBg.jpg')}>
                    <Image source={require('../images/Alex.jpg')} style={styles.smallImage} />
                    <View style={{marginLeft: 5, marginBottom: 5}}>
                        <Text style={[styles.username, styles.text]}>Alexis Senga Ngabo</Text>
                        <View style={{ flex: 1, flexDirection: 'row', }}>
                            <Text style={styles.text}>520 Followers</Text>
                            <FontAwesome5 name='coins' color={'#fff'} size={14} />
                        </View>
                    </View>
                </ImageBackground>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
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
    }
})