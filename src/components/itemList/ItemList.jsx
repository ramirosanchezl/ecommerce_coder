import React from "react";
import Item from "../item/Item";

const ItemList =({list}) => {
    return(
        <div>
            {list.map(product => 
                <Item key={product.id} item={product}/>
            )}

        </div>

    )
}

export default ItemList; 