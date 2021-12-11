import React, {useState} from 'react';
import './cart.scss'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Form from '../form/Form'
import {
    collection,
    getFirestore,
    addDoc,
    writeBatch,
    doc
  } from "firebase/firestore";

const Cart = () => {
    
    const {products, removeItem, totalPrice, inCart, cleanCart} = CartContext()
    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [confirmation, setConfirmation] = useState(false)

    const handleRemove = (i) => {
        removeItem(i.id)
    }

    const handleFinalize = () =>{
        setShowForm(true)
    }

    
    console.log("en carrito",inCart)

    const createOrder = (buyer) =>{
        const db = getFirestore()
        const orders = collection(db, "orders")
        const newOrder = {
            buyer,
            products,
            total: totalPrice(),

        }
        
        addDoc(orders, newOrder).then(({ id }) => {
      console.log(id);
      setOrderId(id)
      setConfirmation(true)
      cleanCart();
    });

    const batch = writeBatch(db);

    products.forEach((item) => {
      const itemRef = doc(db, "items", item.id);
      batch.update(itemRef, { stock: item.stock - item.quantity });
    });

    batch.commit();
  };
   
    if(products.length === 0 && orderId === ""){
        return (
            <div className="cart">
                <div className="heading cf">
                    <h3>No hay productos en el Carrito</h3>
                    <Link to="/" exact>
                        <button className = "continue">Continuar Comprando</button>
                    </Link>
                </div>
                
            </div>
        )
    }else if(orderId && confirmation){
        return(
            <div className="cart">
                <div className="heading cf">
                    <h3>Su Orden Nro. <span className="validation">{orderId}</span> ha sido confirmada</h3>
                    <Link to="/" exact>
                        <button className = "continue">Continuar Comprando</button>
                    </Link>
                </div>
            </div>
        )
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
                        <div className="product-details">
                            <h2>{item.title}</h2>
                        </div> 
                        <div className="product-price">
                            <span className="price">${item.price}</span>
                        </div>
                        <div className="product-quantity">
                            <span className="quantity">{item.quantity}</span>
                        </div>
                        <div className="product-line-price">
                            <label htmlFor="total">Total </label>
                            <span className="total">${item.quantity*item.price}</span>
                        </div>
                        <div className="product-removal">
                                <button class="remove-product" onClick={()=>handleRemove(item)}> 
                                    <DeleteIcon></DeleteIcon>
                                </button>
                            </div>
                    </div>
                    )
                )}

            </div>
            <div className="totals" >
                    <div class="totals-item t-price">
                        <label>Total a Pagar</label>
                        <div class="totals-value t-price">${totalPrice()}</div>
                    </div>
                    <div className="totals-item">
                        <button className ="checkout" onClick={handleFinalize}>Iniciar Compra</button>
                    </div>
                    
            </div>
            {showForm ? <Form createOrder={createOrder}/> : null}
        </section>

    )
}
export default Cart;