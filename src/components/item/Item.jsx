import React from "react"

const Item = ({item: { id, title, description, price, img }}) => {
    return(
        <div className="card">
            <div className="card-body">
                <img src={img} alt={id} width="350" />
                <h2>{title}</h2>
                <p>${price}</p>
                <p>{description}</p>
            </div>
            <button>Agregar</button>
        </div>
    )

}
export default Item 