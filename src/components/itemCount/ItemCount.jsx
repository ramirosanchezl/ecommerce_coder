import React from "react"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@material-ui/core/Button';


const ItemCount = ({stock, initial, onAdd}) =>{
    const [count, setCount] = React.useState(initial);
    
    onAdd = () => { setCount(count + 1) }
    const onMinus = () => { setCount(count - 1) }
    const onAddCart = () => { console.log("Cantidad agregada al carrito:" + {count}) }
    

    return(
        <div className="card">
            <h3>Item</h3>
            <div className="card-body">
              <Button startIcon={<RemoveIcon/>} onClick={onMinus} disabled={count === initial ? "disabled" : ""}></Button>
              {count}
              <Button startIcon={<AddIcon/>} onClick={onAdd} disabled={count === stock ? "disabled" : ""}></Button>
            </div>
            <button onClick={onAddCart}>Agregar al Carrito</button>

        </div>
    )
}
export default ItemCount