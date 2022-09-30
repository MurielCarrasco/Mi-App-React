import React from "react";
import { useState, useEffect} from "react";
/* import ItemCount from "./ItemCount"; */
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"
import './item.css';
/* import { db } from 'firebase/firestore'; */
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

/* const productos = [
    {
        "id":1 ,
        "Titulo": "Vestido con cinturón unicornio ",
        "descripcion" : "Vestido con cinturón unicolor ribete fruncido", 
        "precio": 12590 , 
        "imagen":"vestido-1.jpeg",
        "category":"Mujer",
        "stock": "10",
    },
    {
        "id":2 ,
        "Titulo": "Vestido con cinturón",
        "descripcion" : "Vestido con cinturón con estampado floral de manga mariposa bajo con fruncido",     
        "precio": 15290, 
        "imagen":"vestido-2.jpeg",
        "category":"Mujer",
        "stock": "10",
    },
    {
        "id":3 ,
        "Titulo": "Capucha con cremallera",
        "descripcion" : "Hombres Capucha con cremallera con cordón con forro térmico sin camiseta",     
        "precio": 13090, 
        "imagen":"hombre-capucha-3.jpeg",
        "category":"Hombre",
        "stock": "10",
    },
    {
        "id":4 ,
        "Titulo": "Cazadora mezclilla",
        "descripcion" : "Hombres Cazadora mezclilla desgarro con botón delantero",
        "precio": 35590, 
        "imagen":"hombre-cazadora-4.jpeg",
        "category":"Hombre",
        "stock": "10",
    },
    {
        "id":5 ,
        "Titulo": "Sandalia Mujer",
        "descripcion" : "Sandalias minimalista con tacón delgado con tira tobillera", 
        "precio": 16290, 
        "imagen":"sandalia-5.jpeg",
        "category":"Mujer",
        "stock": "10",
    },
    {
        "id":6 ,
        "Titulo": "Zapatilla Hombre Skate parche",
        "descripcion" : "Zapatillas de skate con parche de letra con cordón delantero",   
        "precio": 21090, 
        "imagen":"zapatilla-6.jpeg",
        "category":"Mujer",
        "stock": "10",
    },
    {
        "id":7 ,
        "Titulo": "Zapatilla Hombre Skate",
        "descripcion":"Hombres Zapatillas de skate de color combinado con cordón delantero",    
        "precio": 27690, 
        "imagen":"zapatilla-h-7.jpeg",
        "category":"Hombre",
        "stock": "10",
    },
    {
        "id":8 ,
        "Titulo": "Zapatilla Hombre Skate estampado",
        "descripcion":"Hombres Zapatillas de skate con estampado de letra con cordón delantero",   
        "precio": 25190, 
        "imagen":"zapatilla-h-8.jpeg",
        "category":"Hombre",
        "stock": "10",
    } 
]; */
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