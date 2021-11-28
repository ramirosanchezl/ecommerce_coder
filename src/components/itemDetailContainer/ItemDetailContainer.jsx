import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Products from '../../products/Products';
import ItemDetail from '../itemDetail/ItemDetail' ;

const getItem = (productId) => {
    return new Promise(result =>  setTimeout(() => 
        { result(Products.find(product =>
            product.id===parseInt(productId)))  
        },500)) 
} 

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {productId} = useParams();
    
    useEffect(() =>{
        getItem(productId).then((product) => {
            setItem(product); 
        });

    }, [productId])

    
    return(
        <>
        
        <ItemDetail item={item} />

        </>
        
)   
}
export default ItemDetailContainer;