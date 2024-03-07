import React from 'react'
import { Text, ToastAndroid, View, AsyncStorage} from 'react-native'
import style from './style'

export default function WalletScreen() {
  
  const handleSend = async () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: Math.random().toString(),
        text: inputText
      };
      
      axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${newMessage.text}`).then(response => {
        newMessage.response = response.data[0].meanings[0].definitions[0].definition
      }).then(() => {
        setMessages([...messages, newMessage]);
      }).then(() => {
        AsyncStorage.setItem('history', JSON.stringify(messages));
      }).catch(error => {
        ToastAndroid.showWithGravity(
          error.toString(),
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      })
    }
  };
  return (
    <View style={style.container}>
      <Text style={style.largeTitle}>Wallet Screen</Text>
    </View>
  )
}
