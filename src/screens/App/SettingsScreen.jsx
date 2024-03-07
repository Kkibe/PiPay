import React from 'react';
import { Linking, Share, View, TouchableOpacity, Text } from 'react-native';
import style from './style';

export default SettingsScreen = ({navigation}) => {
  
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Make payments with Pi using this app!', // Message to share
        url: 'https://www.example.com', // URL to share (optional)
        title: 'Share App', // Title of the message (optional)
      });
      
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      console.log('Error sharing:', error.message);
    }
  };
  
  const handleNavigateContact = () => {
  
  };

  const handleNavigatePreferences = () => {

  }
  
  const handleNavigateTerms = () => {
    const url = 'https://www.reddit.com/';
    Linking.openURL(url)
      .catch((err) => console.error('Failed to open link:', err));
  };
  
  const openOnX = () => {
    const url = 'https://www.x.com/';
    Linking.openURL(url)
      .catch((err) => console.error('Failed to open link:', err));
  };
  
  
  
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button} onPress={handleNavigatePreferences}>
        <Text style={style.buttonText}>Preferences</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={handleShare}>
        <Text style={style.buttonText}>Share With Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={handleNavigateContact}>
        <Text style={style.buttonText}>Get Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={openOnX}>
        <Text style={style.buttonText}>Follow on X</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button} onPress={handleNavigateTerms}>
        <Text style={style.buttonText}>Term & Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
};