import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import StarRating from 'react-native-star-rating';

export default class CartList extends Component {
    render() {
        return (
            <View style={styles.cartlistContainer}>
                <View style={styles.left}>
                    <Image source={require('../assets/brownLeatherJacket.png')} style={styles.image} />
                    <View style={styles.imageBackground}></View>
                </View>
                <View style={styles.right}>
                    <Text style={styles.titeName}>Brown Leather Jacket</Text>
                    <View style={{width: 100}}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={3}
                        starSize={15}
                        fullStarColor={'orange'}
                        emptyStarColor={'grey'}
                    />
                    </View>
                    <Text style={styles.price}>$99</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    cartlistContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    left: {
        flex: 1,

    },
    image: {
        height: 130,
        width: 130
    },
    right: {
        flex: 1,
        justifyContent: 'center'
    },
    imageBackground: {
        width: 120,
        height: 100,
        position: 'absolute',
        zIndex: -1,
        top: 30,
        // backgroundColor: '#fafdff',
        backgroundColor: '#fff',
        borderRadius: 20,
        transform: [{ rotate: "9deg" }],
    },
    titeName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price:{
        marginTop:10,
        fontSize: 25,
        fontWeight: 'bold',
        color:'#3c95fa',
    }

})

