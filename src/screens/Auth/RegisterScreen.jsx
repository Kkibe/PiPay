import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import style from './style';
import auth from '../../models/auth';

export default RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    
    const handleRegister = () => {
      auth.registerUser(username, email, password)
      // Validation passed, proceed with submitting the form
      navigation.navigate("Login");
    };

    return (
      <View style={style.container}>
        <Text style={style.title}>Register</Text>
        <TextInput
          style={style.input}
          placeholder="Username"
          placeholderTextColor={'#2196f3'}
          onChangeText={text => setUsername(text)}
          
        />
        <TextInput
          style={style.input}
          placeholder="Email"
          keyboardType={'email-address'}
          placeholderTextColor={'#2196f3'}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={style.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={'#2196f3'}
          onChangeText={text => setPassword(text)}
        />
        
        <TouchableOpacity style={style.button} onPress={handleRegister}>
          <Text style={style.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={style.footer}>
          <Text style={style.text}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.replace("Login")}>
            <Text style={style.clickable}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
