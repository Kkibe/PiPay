import React from 'react'
import { View, Image, } from 'react-native'
import style from './style';
import source from '../../assets/ai.png';

export default function SplashScreen() {
  return (
    <View style={style.container}>
        <Image src={{url: source}} style={style.image} />
    </View>
  )
}
