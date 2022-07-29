import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './DrawerNav';
import Favorite from '../screens/favorite/Favorite';
import SingleItem from '../screens/singleItem/SingleItem';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Drawer' component={DrawerNav} options={{ headerShown: false }} />
      <Stack.Screen name="favorite" component={Favorite} />
      <Stack.Screen name="SingleItem" component={SingleItem} />
    </Stack.Navigator>
  )
}

export default StackNav