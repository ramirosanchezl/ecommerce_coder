import React, {useState} from 'react'
import ItemCount from "../itemCount/ItemCount"
import {Link} from 'react-router-dom'
import './ItemDetail.scss'
import CartContext from '../../context/CartContext'

const ItemDetail = ({item}) => {
    const totalStock = item.stock
    const initial = 0
    let stock = totalStock
    const [count, setCount] = useState(initial)
    const [add, setAdd] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const { addItem } = CartContext()

    console.log("item detail: ",item)
    console.log("stock detail: ",stock)


    const increase = () => { 
        if(count < stock){
            setCount(count + 1)
        }
    }

    const decrease = () => { 
        if(count > initial){
            setCount(count - 1)
        }
    }

    const onAdd = () =>{
        if (count <= stock){
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
                <p>Stock disponible: {stock - count}</p>
                {add ? <Link to= {'/cart'}><button className="btn-finalizar" onClick={addToCart}>Ir al carrito</button></Link> :
                    <ItemCount stock={stock}
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