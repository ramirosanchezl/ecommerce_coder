import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <div className="cart rounded-lg d-flex align-items-center">
            <ShoppingCartIcon style={{ color: 'white' }}/>
        </div>
    )
}
export default CartWidget