import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const WrapperSaldo = () => {
    return (
        <View style={styles.wrapperSaldo}>
            <View>
                <Image style={styles.imageSaldo} source={{ uri: 'https://images.pexels.com/photos/18530726/pexels-photo-18530726/free-photo-of-gadis-berambut-merah-dengan-gaun-vintage-hijau-dengan-anggur.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }} />
                <Text style={{ alignSelf: 'center', marginTop: 5 }}>Bayar</Text>
            </View>
            <View>
                <Image style={styles.imageSaldo} source={{ uri: 'https://images.pexels.com/photos/18530726/pexels-photo-18530726/free-photo-of-gadis-berambut-merah-dengan-gaun-vintage-hijau-dengan-anggur.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }} />
                <Text style={{ alignSelf: 'center', marginTop: 5 }}>Bayar</Text>
            </View>
            <View>
                <Image style={styles.imageSaldo} source={{ uri: 'https://images.pexels.com/photos/18530726/pexels-photo-18530726/free-photo-of-gadis-berambut-merah-dengan-gaun-vintage-hijau-dengan-anggur.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }} />
                <Text style={{ alignSelf: 'center', marginTop: 5 }}>Bayar</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperSaldo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageSaldo: {
        height: 45,
        width: 45,
        marginTop: 15,
        marginHorizontal: 30,
        borderRadius: 10
    }
});

export default WrapperSaldo