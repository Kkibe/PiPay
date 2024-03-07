import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MarketScreen from './fragments/MarketScreen';
import WalletScreen from './fragments/WalletScreen';
import AccountScreen from './fragments/AccountScreen';
import HistoryScreen from './fragments/HistoryScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;
      
      if (route.name === 'Market') {
        iconName = 'home';
      } else if (route.name === 'Wallet') {
        iconName = 'wallet';
      }else if (route.name === 'Account') {
        iconName = 'person';
      }else {
        iconName = 'history'
      }
      
      // Return the appropriate icon component
      return <Icon name={iconName} size={size} color={color} />;
    },
  })}>
    <Tab.Screen name="Market" options={{ header: () => <AppBar title='Market'/> }}  component={MarketScreen} />
    <Tab.Screen name="Account" options={{ header: () => <AppBar title='Wallet'/> }} component={WalletScreen} />
    <Tab.Screen name="Settings" options={{ header: () => <AppBar title='Account'/> }} component={AccountScreen} />
    <Tab.Screen name="History" options={{ header: () => <AppBar title='History'/> }} component={HistoryScreen} />
  </Tab.Navigator>
  )
}