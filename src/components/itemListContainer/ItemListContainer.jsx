import React, {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where
  } from "firebase/firestore";

const ItemListContainer = () => {

    const [list, setList] = useState([]);
    const {categoryName} = useParams();

    useEffect(() => {
        const db = getFirestore();
        let q = null

        const itemsCollectionRef = collection(db, "items");
        if(categoryName !== undefined){
            q = query(
                itemsCollectionRef,
                // where("category", "==", "transport"),
                where("category", "==", categoryName)
        );
        }else{
            q = itemsCollectionRef;
        }

    getDocs(q).then((snapshot) => {
        setList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [categoryName]);
    
    
    return(
        <section>
            <ItemList list={list} />
        </section>
        
    )
}


export default ItemListContainer;