import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import TopIcons from './Components/TopIcons';
import FilterBar from './Components/FilterBar'
import Cart from './Components/Cart';


export default function Ecommerce() {
    return (
        <View>
            <TopIcons />
            <View>
                <Text style={styles.header}>Women Jacket</Text>
            </View>
            <FilterBar />
            <Cart />

        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15
      }
})

