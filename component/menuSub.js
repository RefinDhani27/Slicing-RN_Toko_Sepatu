import React, { cloneElement } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class MenuSub extends React.Component {
    render() {
        return (
            <View style={{ width: '25%', alignItems: 'center' }}>
                <Image style={styles.imageMenu} source={this.props.image} />
                <Text style={styles.textMenu}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MenuFitur: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    imageMenu: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 15,
        borderRadius: 10,
    },
    textMenu: {
        textAlign: 'center',
        marginTop: 10
    }
});

export default MenuSub