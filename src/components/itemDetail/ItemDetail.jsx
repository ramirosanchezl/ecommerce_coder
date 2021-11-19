import React from 'react'
import Item from '../item/Item'
import ItemCount from "../itemCount/ItemCount"

const ItemDetail = ({item}) => {
    

    return (
        <div>
        <Item item={item} />
        <ItemCount stock={5} initial={1}/>
        </div>
            
    )
}

export default ItemDetail