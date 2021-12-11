import React from "react"
import { Link } from 'react-router-dom'
import './item.scss'

const Item = ({item: { id, title, description, img, price }}) => {
    return(
        <div className="container card-product">
            <img src={img} alt={id}/>
            <h4 className = "product-details">${price}</h4>
            <h4>{title}</h4>
            <h5>{description}</h5>
            <Link to={`/item/${id}`}> <button>Ver Detalle</button> </Link>
        </div>
    )
    
}
export default Item