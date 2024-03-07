import React, { useState } from 'react'
import { TextInput, TouchableOpacity, Text, View } from 'react-native'
import style from './style';

export default function ContactScreen() {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = () => {

  }
  return (
    <View style={style.container}>
      <Text style={style.title}>Get in touch</Text>
      <View>
        <TextInput placeholder="Email" onChangeText={text => setEmail(text)} value={email} style={style.input}/>
        <TextInput placeholder="Type something..." onChangeText={text => setContent(text)} value={content} style={{...style.input, height: 100}}/>
        <TouchableOpacity style={style.button} onPress={handleSubmit}>
          <Text style={style.buttonText}>Get Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
