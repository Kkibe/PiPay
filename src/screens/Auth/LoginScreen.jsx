import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import style from './style';
import auth from '../../models/auth';


export default LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    auth.loginUser(email, password)
    navigation.replace("Home");
  };
  
  return (
    <View style={style.container}>
      <Text style={style.title}>Login</Text>
      <TextInput
        style={style.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={style.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <View style={style.footer}>
        <Text style={style.text}>Already have an account ? </Text>
        <TouchableOpacity 
            onPress={() => navigation.replace("Register")}>
            <Text style={style.clickable}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};