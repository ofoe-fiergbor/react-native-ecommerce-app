import React from 'react'
import { View, FlatList } from 'react-native'
import CartList from './CartList'


export default function Cart () {
    const items=[
        {image: require('../assets/brownLeatherJacket.png'), name: 'Brown Leather Jacket', rating: 3, id: 1, price: 99},
        {image: require('../assets/pinkSportJacket.png'), name: 'Pink Sport Jacket', rating: 4, id: 3, price: 103},
        {image: require('../assets/whiteWomenJacket.png'), name: 'White Winter Jacket', rating: 2, id: 4, price: 98},
        {image: require('../assets/jeansJacket.png'), name: 'Denim Jacket', rating: 2, id: 2, price: 89},

    ]
    
        return (
            <View>
                <FlatList
                data={items}
                renderItem={({item})=>{
                    return <CartList image={item.image} name={item.name} rating = {item.rating} price={item.price}/>
                }}
                keyExtractor={(item)=> item.id}
                />
                
            </View>
        )
    
}
