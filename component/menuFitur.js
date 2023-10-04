import React, { cloneElement } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MenuSub from './menuSub'

const MenuFitur = () => {
    return (
        <View style={styles.MenuFitur}>
            <MenuSub image={{uri: 'https://i.pinimg.com/736x/85/e8/ac/85e8ac7e34fc40846fedd80dee7bec86.jpg'}} title="Adidas"/>
            <MenuSub image={{uri: 'https://i.pinimg.com/564x/3c/d0/78/3cd0789a53745584b9d603eca446305e.jpg'}} title="Nike"/>
            <MenuSub image={{uri: 'https://i.pinimg.com/564x/d4/e1/9b/d4e19b63832a05c62907add193e6b067.jpg'}} title="Puma"/>
            <MenuSub image={{uri: 'https://i.pinimg.com/564x/14/84/5b/14845b86bbe8bd34dd8cd12afac5dd21.jpg'}} title="New Balance"/>
            <MenuSub image={{uri: 'https://i.pinimg.com/564x/54/5a/87/545a875e39c04c5fbc9febfb25b47439.jpg'}} title="Converse"/>
            <MenuSub image={{uri: 'https://i.pinimg.com/564x/a9/fa/37/a9fa3789bd9283a662ddee811f62b2c3.jpg'}} title="Vans"/>
            <MenuSub image={{uri: 'https://i.pinimg.com/564x/bc/8a/9b/bc8a9b9b27c91e3cb62d74e818499a32.jpg'}} title="Fila"/>
            <MenuSub image={{uri: 'https://i.pinimg.com/564x/9c/ee/e2/9ceee215f6c8efd20c511b6caff09065.jpg'}} title="Reebok"/>
        </View>
    )
}

const styles = StyleSheet.create({
    MenuFitur: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap',
        width: '100%'
    },
});

export default MenuFitur