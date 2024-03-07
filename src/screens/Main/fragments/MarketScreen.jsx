import React from 'react'
import { FlatList, Text, View } from 'react-native';
import style from './style';
import MarketItem from './components/MarketItem';
import FeaturedItem from './components/FeaturedItem';

const ListHeader = () => {
  <>
    <View style={style.titleWrapper}>
      <Text styles={style.largeTitle}>Markets</Text>
    </View>
    <View style={style.divider}/>
  </>
}
export default function MarketScreen() {
  return (
    <View style={style.container}>
        <FlatList
          data={data && data}
          horizontal
          pagingEnabled
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
            <FeaturedItem
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage={item.price_change_percentage_7d_in_currency}
              logoUrl={item.image}
            />
          }}
      />
        <View style={style.markets}>
          <FlatList 
            keyExtractor={(item) => item.id}
            data={SAMPLE_DATA}
            renderItem={({item}) => {
              <MarketItem
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                priceChangePercentage={item.price_change_percentage_7d_in_currency}
                logoUrl={item.image}
              />
            }}
            ListHeaderComponent={<ListHeader />}
          />
        </View>
    </View>
    )
}
    