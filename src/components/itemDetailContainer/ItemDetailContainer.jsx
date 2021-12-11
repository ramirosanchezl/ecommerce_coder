import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from '../itemDetail/ItemDetail' ;
import {
    getFirestore,
    doc,
    getDoc
  } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {productId} = useParams();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
           const db = getFirestore();
      
           const productRef = doc(db, "items", productId);
           getDoc(productRef).then((snapshot) => {
             if (snapshot.exists()) {
                setItem({ ...snapshot.data(), id: snapshot.id });
                setLoading(false) 
             }
           });
         }, [productId]);


    
    return(
        <>
        
        {loading ? "Cargando Información..." : <ItemDetail item={item} />}


        </>
        
)   
}
export default ItemDetailContainer;