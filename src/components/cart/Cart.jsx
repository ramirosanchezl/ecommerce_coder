import React from 'react';
import './cart.scss'
import CartContext from '../../context/CartContext'
import {Link} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    const {products, removeItem} = CartContext()

    const handleRemove = (i) => {
        removeItem(i.id)
    } 
   
    return(
        <section className="cart">
            <div className="heading cf">
                <h2>Carrito de Compras</h2>
                <Link to="/" exact>
                    <button className = "continue">Continuar Comprando</button>
                </Link>
            </div>
            <div className="shopping-cart">
                
                {products.map((item) => (
                    <div className="product">
                        <div className="product-image">
                            <img src={item.img} alt={item.id}/>
                        </div>
                        <div className="product-details">{item.title}</div> 
                        <div className="product-quantity">
                            <input type="text" placeholder={item.quantity}/>
                        </div>
                        <div className="product-price">${item.price}</div>
                        <button onClick={()=>handleRemove(item)}>
                                <DeleteIcon />
                            </button>
                    </div>
                    )
                )}

            </div>
        </section>

    )
}
export default Cart;