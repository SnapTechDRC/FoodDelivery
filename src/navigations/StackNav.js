import React from 'react';
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './DrawerNav';
import Favorite from '../screens/favorite/Favorite';
import SingleItem from '../screens/singleItem/SingleItem';
import Ionicons from "react-native-vector-icons/Ionicons";
import OrderTrack from '../screens/orderTrack/OrderTrack';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Drawer' component={DrawerNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="favorite" component={Favorite}
      />
      <Stack.Screen
        name="SingleItem" component={SingleItem}
        options={{
          title: '',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert('This is a button!')}
              style={{ marginRight: 20 }}
            >
              <Ionicons name='heart-outline' size={25} />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="OrderTrack" component={OrderTrack}
        options={{ title: '', headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default StackNav