import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TopIcons from './TopIcons';
import { LinearGradient } from 'expo-linear-gradient';
import StarRating from 'react-native-star-rating';



export default class Checkout extends Component {
    render() {
        return (
            <View>
                <TopIcons />
                <View>
                    <Image source={require('../assets/pinkSportJacket.png')} style={styles.image} />
                    <View style={styles.imageBackground}>
                        <LinearGradient
                            colors={['transparent', '#fff']}
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                height: 200,
                                borderRadius: 30
                            }} />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Red Woman Jacket</Text>
                    <View style={{ flexDirection: 'row', alignContent: 'center', marginTop: 10 }}>
                        <Text style={{ marginRight: 10 }}>Reviews  :</Text>
                        <View style={{ width: 100 }}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={3}
                                starSize={15}
                                fullStarColor={'orange'}
                                emptyStarColor={'grey'}
                            />
                        </View>

                    </View>
                    <View style={{ width: 60, height: 5, backgroundColor: '#3c95fa', borderRadius: 50, marginVertical: 15 }}></View>
                    <View>
                        <Text style={{ lineHeight: 25 }}>It is a long established fact that a reader will be distracted by the readable content of a page.</Text>
                    </View>
                    <View style={styles.component}>
                        <Text style={{ paddingLeft: 30, color: '#3c95fa', fontWeight: 'bold' }}>Material : 91% polyester, 9% elastane</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'space-evenly' }}>
                        <TouchableOpacity style={styles.sizes}>
                            <Text style={styles.sizesText}>XS</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.sizes}>
                            <Text style={styles.sizesText}>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sizes , styles.sizeActive]}>
                            <Text style={[styles.sizesText, styles.sizeTextActive]}>M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sizes}>
                            <Text style={styles.sizesText}>L</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sizes}>
                            <Text style={styles.sizesText}>XL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <View>
                            <Text style={{color: '#fff', fontWeight:'bold'}}>Total Amount</Text>
                            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>$110</Text>
                        </View>
                        <TouchableOpacity style={{backgroundColor: 'navy', borderRadius: 10, height: 40,width:100, alignSelf: 'center', justifyContent:'center'}}>
                            <Text style={{color:'#fff', alignSelf:'center', fontWeight:'bold'}}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        alignSelf: 'center'
    },
    imageBackground: {
        width: 250,
        left: 80,
        zIndex: -1,
        position: 'absolute',
        transform: [{ rotate: "17deg" }],

    },
    component: {
        backgroundColor: '#fff',
        height: 40,
        width: 400,
        left: -25,
        position: 'absolute',
        justifyContent: 'center',
        top: 145
    },
    sizes: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 50,
        width: 50,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    sizesText: {
        alignSelf: 'center'
    },
    sizeActive:{
        backgroundColor: '#3c95fa',
    },
    sizeTextActive:{color: '#fff'},
    footer:
        { flexDirection: 'row', 
        height: 60, 
        width: 300, 
        marginTop: 20, 
        backgroundColor: '#3c95fa',
        borderRadius: 10,
        justifyContent:'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5
    },

})
