import React from "react"
import { Link } from 'react-router-dom'
import './Item.scss'

const Item = ({item: { id, title, description, img, price }}) => {
    return(
        <div className="container card-product">
            <img src={img} alt={id}/>
            <h3 className = "product-details">${price}</h3>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <Link to={`/item/${id}`}> <button>Ver Detalle</button> </Link>
        </div>
    )
    
}
export default Item