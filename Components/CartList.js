import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import StarRating from 'react-native-star-rating';

export default function CartList({ image, price, rating, name }) {

    return (
        <View style={styles.cartlistContainer}>
            <View style={styles.left}>
                <Image source={image} style={styles.image} />
                <View style={styles.imageBackground}></View>
            </View>
            <View style={styles.right}>
                <Text style={styles.titeName}>{name}</Text>
                <View style={{ width: 100 }}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={rating}
                        starSize={15}
                        fullStarColor={'orange'}
                        emptyStarColor={'grey'}
                    />
                </View>
                <Text style={styles.price}>${price}</Text>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    cartlistContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    left: {
        flex: 1,

    },
    image: {
        height: 100,
        width: 100
    },
    right: {
        flex: 1.3,
        justifyContent: 'center'
    },
    imageBackground: {
        width: 110,
        height: 70,
        position: 'absolute',
        zIndex: -1,
        top: 30,
        elevation: -10,
        // backgroundColor: '#fafdff',
        backgroundColor: '#fff',
        borderRadius: 20,
        transform: [{ rotate: "10deg" }],
    },
    titeName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3c95fa',
    }

})

