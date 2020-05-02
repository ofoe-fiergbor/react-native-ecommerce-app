import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign, Feather} from '@expo/vector-icons'

export default class TopIcons extends Component {
    render() {
        return (
            <View style={styles.topIconsContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <AntDesign name='arrowleft' style={styles.topIcon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Feather name='shopping-cart' style={[styles.topIcon, styles.topIconCart]} />
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    topIconsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      iconContainer:{
          width: 35,
          height:35,
          marginTop: 10,
          backgroundColor: '#fff',
          justifyContent: 'center',
          borderRadius: 100,
          elevation: 4
      },
      topIcon:{
          alignSelf: 'center',
          fontSize: 20,
          fontWeight: 'bold'
      },
      topIconCart:{
          color: '#3c95fa'
      },

})

