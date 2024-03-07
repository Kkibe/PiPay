import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import style from './style'

export default function FeaturedItem({name, symbol, currentPrice, priceChangePercentage, logoUrl}) {
    const priceChangeColor = priceChangePercentage > 0 ? "green" : "red";
  return (
    <TouchableOpacity style={style.card}>
        <View style={style.itemWrapper}>
          <View style={style.leftWrapper}>
            <Image src={{
              uri: {logoUrl}
            }} style={style.image}/>
            <View style={style.titlesWrapper}>
              <Text style={style.title}>{name}</Text>
              <Text style={style.subTitle}>{symbol.toUpperCase()}</Text>
            </View>
          </View>
          
          <View style={style.rightWrapper}>
              <Text style={style.title}>${currentPrice.toLocaleString("en-US", {currency: 'USD'})}</Text>
              <Text style={[style.subTitle, {color: priceChangeColor}]}>{priceChangePercentage.toFixed(2)}%</Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}