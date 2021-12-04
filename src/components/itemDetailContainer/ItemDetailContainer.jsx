import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from '../itemDetail/ItemDetail' ;
import {
    doc,
    getDoc,
    getFirestore
  } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {productId} = useParams();
    
     useEffect(() => {
        const db = getFirestore();

        const itemsCollectionRef = doc(db, "items", productId);
        getDoc(itemsCollectionRef).then((snapshot) => {
        if (snapshot.exists()) {
            setItem({ ...snapshot.data(), id: snapshot.id });
        }
        });
     }, [productId]);

    
    return(
        <>
        
        <ItemDetail item={item} />

        </>
        
)   
}
export default ItemDetailContainer;