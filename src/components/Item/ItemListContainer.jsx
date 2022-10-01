import React from "react";
import { useState, useEffect} from "react";
/* import ItemCount from "./ItemCount"; */
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"
import './item.css';
/* import { db } from 'firebase/firestore'; */
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = ( { saludo } ) => {
    const [items, setItems] = useState([]);
   /*  const [isLoading, setIsLoading] = useState(true); */
    const {categoryId} = useParams ();

    useEffect(() => {

        const db = getFirestore();
        const itemCollection = collection(db, 'productos');
        if (categoryId) {
            const queryFilter = query(itemCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
            .then(res => setItems(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        } else {
            getDocs(itemCollection)
            .then(res => setItems(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        }
                
    }, [categoryId]);
           
       
    
     return (
                <> 
                    <p style={{ textAlign: 'center' }}>{saludo}</p>
                    <ItemList items={items}/>
                </> 
            
       
       /*  <div>
            {<h1> {greeting} </h1> }
        </div> */
     );
};

export default ItemListContainer;