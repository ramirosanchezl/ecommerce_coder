import React from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@material-ui/core/Button';


const ItemCount = ({stock, initial, onAdd, count, increase, decrease}) =>{
    console.log("stock count: ",stock)
    
    return(
        <div className="card">
            <div className="card-body">
            <h5>Cantidad:</h5>
              <Button startIcon={<RemoveIcon/>} onClick={decrease} disabled={count === initial}></Button>
              {count}
              <Button startIcon={<AddIcon/>} onClick={increase} disabled={count === stock}></Button>
            </div>
            <button onClick={onAdd} disabled={!count>0}>Agregar al Carrito</button>

        </div>
    )
}
export default ItemCount