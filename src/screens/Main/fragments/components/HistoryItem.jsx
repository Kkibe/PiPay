import React from 'react'
import style from './style'

export default function HistoryItem({id, userLogo, type, amount, date}) {
    const typeColor = type === "Send" ? "red" : "green"
  return (
    <View style={style.itemWrapper}>
          <View style={style.leftWrapper}>
            <Image src={{
              uri: userLogo
            }} style={style.image}/>
            <View style={style.titlesWrapper}>
              <Text style={style.title}>{id}</Text>
              <Text style={style.subTitle}>{date}</Text>
            </View>
          </View>
          
          <View style={style.rightWrapper}>
              <Text style={style.title}>${amount} {symbol.toUpperCase()}</Text>
              <Text style={[style.subTitle, {color: typeColor}]}>{type}</Text>
          </View>
    </View>
  )
}
