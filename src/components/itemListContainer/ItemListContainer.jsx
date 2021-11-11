import React, {useState, useEffect} from 'react';
//import ItemCount from "../itemCount/ItemCount"
import Products from '../../products/Products';
import ItemList from '../itemList/ItemList';

const productList = new Promise (
    (result, reject) => setTimeout(() => result(Products), 2000)

);


const ItemListContainer = ({ title }) => {

    const [list, setList] = useState([]);

    useEffect(() => {
        productList.then(result => setList(result))
    }, [])


    return (
        <div>
            <h1 className="text-center mt-2">{title}</h1>

            {/*<ItemCount stock={5} initial={1}/>*/}
            <ItemList list={list} />
        </div>
    )
}
export default ItemListContainer