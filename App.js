import {NavigationContainer} from '@react-navigation/native';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './src/screens/App/OnboardingScreen';
import LoginScreen from './src/screens/Auth/LoginScreen';
import RegisterScreen from './src/screens/Auth/RegisterScreen';
import ResetScreen from './src/screens/Auth/ResetScreen';
import SettingsScreen from './src/screens/App/SettingsScreen';
import ContactScreen from './src/screens/App/ContactScreen';
import HomeScreen from './src/screens/Main/HomeScreen';
import SplashScreen from './src/screens/App/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator> 
      <Stack.Screen name='Splash' options={{headerShown: false}} component={SplashScreen} />
      <Stack.Screen name='Onboarding' options={{headerShown: false}} component={<OnboardingScreen />} />
      <Stack.Screen name="Register" options={{ headerShown: false  }} component={RegisterScreen} />
      <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen} />
      <Stack.Screen name='Reset' options={{headerShown: false}} component={ResetScreen} />
      <Stack.Screen name="Home" options={{ headerShown: false  }}  component={HomeScreen} />
      <Stack.Screen name="Settings" options={{ headerShown: false  }} component={SettingsScreen} />
      <Stack.Screen name='Support' options={{ headerShown: false  }} component={ContactScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
