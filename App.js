import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import WrapperSaldo from './component/wrapperSaldo';
import MenuFitur from './component/menuFitur';

const { width } = Dimensions.get('window');

export default function App() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        'https://images.pexels.com/photos/812875/pexels-photo-812875.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/1225136/pexels-photo-1225136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/812871/pexels-photo-812871.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/233315/pexels-photo-233315.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3964549/pexels-photo-3964549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ];

    const handleScroll = (event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundedIndex = Math.round(index);
        setActiveIndex(roundedIndex);
    };

    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    style={styles.slider}
                >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                            style={styles.image}
                        />
                    ))}
                </ScrollView>

                <View style={styles.indicatorContainer}>
                    {images.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                index === activeIndex ? styles.activeIndicator : {}
                            ]}
                        />
                    ))}
                </View>

                <View style={styles.wrapper}>
                    <WrapperSaldo />
                </View>
                <View style={{ marginHorizontal: 18 }}>
                    <MenuFitur />
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3DBCE',
        alignItems: 'center',
        justifyContent: 'top',
    },
    sliderContainer: {
        position: 'relative',
        width: '100%',
    },
    slider: {
        width: '100%',
    },
    image: {
        width,
        height: 200,
    },
    indicatorContainer: {
        bottom: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#BFBFBF',
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: '#FFB4A2',
    },
    wrapper: {
        marginHorizontal: 18,
        height: 100,
        marginTop: -30,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 4,
    },
});
