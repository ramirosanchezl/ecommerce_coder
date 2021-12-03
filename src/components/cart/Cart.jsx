import React from 'react';
import './cart.scss'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    
    const {products, removeItem, totalPrice, inCart} = CartContext()

    const handleRemove = (i) => {
        removeItem(i.id)
    }
    
    console.log("en carrito",inCart)
   
    return(
        <section className="cart">
            <div className="heading cf">
                <h2>Carrito de Compras</h2>
            </div>
            <div className="shopping-cart">
                
                {products.map((item) => (
                    <div key={item.id} className="product">
                        <div className="product-image">
                            <img src={item.img} alt={item.id}/>
                        </div>
                        <div className="product-details">{item.name}</div> 
                        <div className="product-quantity">{item.quantity}</div>
                        <div className="product-price">${item.price}</div>
                        <div className="product-removal">
                            <button className="remove-product" onClick={()=>handleRemove(item)}>
                                <DeleteIcon></DeleteIcon>
                            </button>
                        </div>
                        <div className="product-line-price">${item.quantity*item.price}</div>
                    </div>
                    )
                )}

            </div>

            {inCart ?
                <div className="totals" >
                    <div class="totals-item t-price">
                        <label>Total a Pagar</label>
                        <div class="totals-value t-price">${totalPrice()}</div>
                    </div>
                </div>
                : "No hay productos en el carrito"
            }
            <div className="product">
                {!inCart ?
                    <Link to="/" exact>
                    <button className = "continue">Continuar Comprando</button>
                </Link>
                : null
                }
            </div>
        </section>

    )
}
export default Cart;