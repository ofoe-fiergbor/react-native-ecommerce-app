import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopIcons from './Components/TopIcons';
import FilterBar from './Components/FilterBar'
import CartList from './Components/CartList';

export default function App() {
  return (
    <View style={styles.container}>
      <TopIcons />
      <View>
        <Text style={styles.header}>Woman Jacket</Text>
      </View>
      <FilterBar/>
      <CartList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf7f7',
    paddingVertical: 25,
    paddingHorizontal: 20

  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15
  }

});
