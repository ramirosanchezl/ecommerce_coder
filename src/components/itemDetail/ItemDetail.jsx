import React, {useState} from 'react'
import ItemCount from "../itemCount/ItemCount"
import {Link} from 'react-router-dom'
import './ItemDetail.scss'
import CartContext from '../../context/CartContext'

const ItemDetail = ({item}) => {
    const totalStock = 5
    const initial = 0
    const [stock, setStock] = useState(totalStock)
    const [count, setCount] = useState(initial)
    const [add, setAdd] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const { addItem } = CartContext()


    const increase = () => { 
        if(count < totalStock){
            setCount(count + 1)
            setStock(stock - 1)
        }
    }

    const decrease = () => { 
        if(count > initial && count > 0){
            setCount(count - 1)
            setStock(stock + 1)
        }
    }

    const onAdd = () =>{
        if (count <= totalStock){
            setAdd(true)
            setQuantity(count)
        }
    }

    const addToCart = () => {
        addItem(item, quantity)
    }


    return (
        
        <div className="card-product-detail">
            <div className="img-detail">
            <img src={item.img} alt={item.id} width="350" />
            </div>
            <div className="info-detail">
                <h3>{item.name}</h3>
                <p className="card-description">{item.description}</p>
                <p className="card-price">${item.price}</p>
                <p>Stock disponible: {stock}</p>
                {add ? <Link to= {'/cart'}><button className="btn-finalizar" onClick={addToCart}>Ir al carrito</button></Link> :
                    <ItemCount stock={totalStock}
                    initial={initial}
                    count={count}
                    increase={increase}
                    decrease={decrease}
                    onAdd={onAdd}
                    />
                }
                
            </div>
        </div>
           
    )
}

export default ItemDetail