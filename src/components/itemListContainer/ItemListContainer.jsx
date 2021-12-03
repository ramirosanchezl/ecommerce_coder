import React, {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import Products from "../../products/Products";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [list, setList] = useState([]);
    const {categoryName} = useParams();

    function filtroCategoria(item) {
        return item.category === categoryName
    }

    useEffect(() => {
            let itemsPorCategoria = Products.filter(filtroCategoria);
            setList(categoryName ? itemsPorCategoria : Products);
    },)
    
    
    return(
        <section>
            <ItemList list={list} />
        </section>
        
    )
}


export default ItemListContainer;