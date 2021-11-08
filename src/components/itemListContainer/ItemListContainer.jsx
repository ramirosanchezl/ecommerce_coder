import React from 'react';
import ItemCount from "../itemCount/ItemCount"

const ItemListContainer = ({ title }) => {
    return (
        <div>
            <h1 className="text-center mt-2">{title}</h1>

            <ItemCount stock={5} initial={1}/>
        </div>
    )
}
export default ItemListContainer