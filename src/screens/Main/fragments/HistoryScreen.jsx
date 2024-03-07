import React, { useEffect } from 'react'
import { FlatList, ToastAndroid, View, AsyncStorage } from 'react-native';
import style from './style';
import HistoryItem from './components/HistoryItem';
export default function HistoryScreen() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('history')
    .then((dataString) => {
      if (dataString) {
        setHistory(JSON.parse(dataString))
      } else {
        ToastAndroid.showWithGravity(
          'No data found in local storage.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    })
    .catch((error) => {
      console.log('Error retrieving data:', error);
      ToastAndroid.showWithGravity(
        'An error occurred while retrieving data.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    });
  }, [])
  return (
    <View style={style.container}>
        <FlatList
          data={history && history}
          horizontal
          pagingEnabled
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
            <HistoryItem
              id={item.id}
              userLogo={item.userLogo}
              type={item.type}
              amount={item.amount}
              date={item.date}
              image={item.image}
            />
          }}
      />
   </View>
  )
};