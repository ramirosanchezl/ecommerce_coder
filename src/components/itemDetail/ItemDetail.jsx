import React, {useState} from 'react'
import ItemCount from "../itemCount/ItemCount"
import {Link} from 'react-router-dom'
import './ItemDetail.scss'

const ItemDetail = ({item: { id, name, description, img, price }}) => {
    const totalStock = 5
    const initial = 0
    const [stock, setStock] = useState(totalStock)
    const [count, setCount] = useState(initial)
    const [add, setAdd] = useState(false)

    const increase = () => { 
        if(count < totalStock){
            setCount(count + 1)
            setStock(stock - 1)
        }
    }

    const decrease = () => { 
        if(count > initial && count > 1){
            setCount(count - 1)
            setStock(stock + 1)
        }
    }

    const onAdd = () =>{
        if (count <= totalStock){
            setAdd(true)
        }
    }


    return (
        
        <div className="card-product-detail">
            <div className="img-detail">
                <img src={img} alt={id} width="350" />
            </div>
            <div className="info-detail">
                <h3>{name}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
                <p>Stock disponible: {stock}</p>
                {add ? <Link to= {'/cart'}><button className="btn-finalizar">Ir al carrito</button></Link> :
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