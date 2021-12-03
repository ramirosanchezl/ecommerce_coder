import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../context/CartContext'
import Badge from '@mui/material/Badge';


const CartWidget = () => {
    const {productCount} = CartContext()
    console.log("count:", productCount());
    var size = productCount();
    return (
        <>
        {size !== 0 ? 
            <div className="cartWidget">
                <Badge color="error" badgeContent={size}>
                    <ShoppingCartIcon style={{ color: 'white' }}/>
                </Badge>
            </div>
        : null
        }
        </>
    )
}
export default CartWidget