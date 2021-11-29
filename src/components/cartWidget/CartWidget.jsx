import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.scss'


const CartWidget = () => {
    return (
        <div className="cartWidget">
            <ShoppingCartIcon style={{ color: 'white' }}/>
        </div>
    )
}
export default CartWidget