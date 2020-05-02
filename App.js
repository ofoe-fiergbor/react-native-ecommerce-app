import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ecommerce from './Ecommerce';
import Checkout from './Components/Checkout';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Ecommerce/> */}
      <Checkout/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf7f7',
    paddingVertical: 20,
    paddingHorizontal: 25

  },

});
