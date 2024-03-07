import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Text } from 'react-native';


//Tablayout instead

const Tab = createBottomTabNavigator();

export default function AccountScreen() {
  return (
  <View>
    <Text>Account Fragment</Text>
  </View>
  )
}