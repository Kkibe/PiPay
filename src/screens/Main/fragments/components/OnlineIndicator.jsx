import React from 'react'
import { View } from 'react-native'

export default function OnlineIndicator({isOnline}) {
  return (
    <View style={{width: 10, height: 10, borderRadius: "50%", backgroundColor: () => {isOnline === true ? "green" : "red"}}}/>
  )
}
