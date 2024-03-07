import React, { useRef, useState } from "react";
import { FlatList, Image, StatusBar, Text, TouchableOpacity, View, SafeAreaView, Dimensions } from "react-native";
import style from "./style";
//const {width, height} = Dimensions.get('window');
const COLORS = {primary : '#07c1dd', white: '#FFF'};

const slides = [
    {
        id: 1,
        image: require('../../assets/paywithpi.jpg'),
        title: 'Payments',
        subtitle: 'Send and receive payments in Pi'
    },
    {
        id: 2,
        image: require('../../assets/receivepi.jpg'),
        title: 'Deposit',
        subtitle: 'Send and receive Pi'
    },
    {
        id: 3,
        image: require('../../assets/piwallet.jpg'),
        title: 'Pi Wallet',
        subtitle: 'Get a free Pi wallet'
    }
]

const Slide = ({item}) => {
    return <View style={{alignItems: 'center'}}>
        <Image source={item.image} style={style.OnboardingScreen.slideImage}/>
        <Text style={style.OnboardingScreen.title}>{item.title}</Text>
        <Text style={style.OnboardingScreen.subtitle}>{item.subtitle}</Text>
    </View>
}

export default OnboardingScreen = ({navigation}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);
    const Footer = () => {
        return <View style={style.container}>
                    <View style={style.OnboardingScreen.slideWrapper}>
                        {slides.map((_, index) => (
                            <View key={index} style={[style.OnboardingScreen.indicator, currentSlideIndex == index && {
                                backgroundColor: COLORS.white,width: 25}]} />
                        ))}
                    </View>

                    <View style={{marginBottom: 20}}>
                        {
                            currentSlideIndex == slides.length -1 ? (
                                <View style={{height: 50}}>
                                    <TouchableOpacity style={[style.btn]} onPress={() => {
                                        navigation.replace('Start');
                                    }}>
                                        <Text style={{fontWeight: 'bold', fontSize: 15}}>GET STARTED</Text>
                                    </TouchableOpacity>
                                </View>) : (
                                        <View style={{flexDirection: 'row'}}>
                                            <TouchableOpacity style={[style.btn, {backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORS.white}]} onPress={skip}>
                                                <Text style={{fontWeight: 'bold', fontSize: 15, color: COLORS.white}}>SKIP</Text>
                                            </TouchableOpacity>
                                            <View style={{width: 15}}/>
                                            <TouchableOpacity style={[style.btn]} onPress={goNextSlide}>
                                                <Text style={{fontWeight: 'bold', fontSize: 15}}>NEXT</Text>
                                            </TouchableOpacity>
                                        </View>)
                        }
                    </View>
                </View>
    }
    
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    }
    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if(nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({offset});
            setCurrentSlideIndex(nextSlideIndex);
        }
    }
    
    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex);
    
    }
    return <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
        
        <StatusBar backgroundColor={COLORS.primary}/>
        <FlatList 
            onMomentumScrollEnd={updateCurrentSlideIndex}
            ref={ref}
            pagingEnabled
            data={slides} 
            contentContainerStyle={{height: height * 0.75}}
            horizontal 
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Slide item ={item} />}/>
        <Footer />
    </SafeAreaView>
}