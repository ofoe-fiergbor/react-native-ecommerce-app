import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default class FilterBar extends Component {
    render() {
        return (
            <View style={styles.searchBarContainer}>
                <View style={{flex:6, justifyContent:'center'}}>
                    <TextInput placeholder='   Search Jacket' />
                </View>
                <View style={styles.filterBtnContainer}>
                    <TouchableOpacity >
                        <Text style={styles.filterBtnText}>Filter</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: '#fff',
        width: 320,
        height: 45,
        flexDirection: 'row',
        borderRadius: 15,
        elevation: 1

    },
    filterBtnContainer: {
        width: 50,
        height: 45,
        backgroundColor: '#fff',
        flex: 1.3,
        justifyContent: 'center',
        borderBottomEndRadius: 15,
        borderTopEndRadius: 15


    },
    filterBtnText:{
        color:'#3c95fa',
        fontWeight: 'bold'
    }

})

