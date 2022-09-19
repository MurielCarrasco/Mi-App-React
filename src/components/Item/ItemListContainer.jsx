import React from "react";
import { useState, useEffect} from "react";
/* import ItemCount from "./ItemCount"; */
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"
import './item.css';

const productos = [
    {
        "id":1 ,
        "Titulo": "Vestido con cinturón unicornio ",
        "descripcion" : "Vestido con cinturón unicolor ribete fruncido", 
        "precio": 12.590 , 
        "imagen":"vestido-1.jpeg",
        "category":"Mujer",
        "stock": "10",
    },
    {
        "id":2 ,
        "Titulo": "Vestido con cinturón",
        "descripcion" : "Vestido con cinturón con estampado floral de manga mariposa bajo con fruncido",     
        "precio": 15.290, 
        "imagen":"vestido-2.jpeg",
        "category":"Mujer"
    },
    {
        "id":3 ,
        "Titulo": "Capucha con cremallera",
        "descripcion" : "Hombres Capucha con cremallera con cordón con forro térmico sin camiseta",     
        "precio": 13.090, 
        "imagen":"hombre-capucha-3.jpeg",
        "category":"Hombre"
    },
    {
        "id":4 ,
        "Titulo": "Cazadora mezclilla",
        "descripcion" : "Hombres Cazadora mezclilla desgarro con botón delantero",
        "precio": 35.590, 
        "imagen":"hombre-cazadora-4.jpeg",
        "category":"Hombre"
    },
    {
        "id":5 ,
        "Titulo": "Sandalia Mujer",
        "descripcion" : "Sandalias minimalista con tacón delgado con tira tobillera", 
        "precio": 16.290, 
        "imagen":"sandalia-5.jpeg",
        "category":"Mujer"
    },
    {
        "id":6 ,
        "Titulo": "Zapatilla Hombre Skate parche",
        "descripcion" : "Zapatillas de skate con parche de letra con cordón delantero",   
        "precio": 21.090, 
        "imagen":"zapatilla-6.jpeg",
        "category":"Mujer"
    },
    {
        "id":7 ,
        "Titulo": "Zapatilla Hombre Skate",
        "descripcion":"Hombres Zapatillas de skate de color combinado con cordón delantero",    
        "precio": 27.690, 
        "imagen":"zapatilla-h-7.jpeg",
        "category":"Hombre"
    },
    {
        "id":8 ,
        "Titulo": "Zapatilla Hombre Skate estampado",
        "descripcion":"Hombres Zapatillas de skate con estampado de letra con cordón delantero",   
        "precio": 25.190, 
        "imagen":"zapatilla-h-8.jpeg",
        "category":"Hombre"
    } 
];
const ItemListContainer = ( { saludo } ) => {
    const [items, setItems] = useState([]);

    const {categoryId} = useParams ();

    useEffect(() => {
        const promesaP= () => new Promise(
            (res, rej) => {
                const productosF = productos.filter(
                    (productos) => productos.category === categoryId
                );
                setTimeout(() => {
                    res(categoryId ? productosF : productos);
                }, 500);
            });

         promesaP()
         .then((data) => {
              setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryId]);
           
       
    
     return (
         <div >
            <p style={{ textAlign: 'center' }}>{saludo}</p>
       
            <ItemList items={items}/>
        
        </div>
       /*  <div>
            {<h1> {greeting} </h1> }
        </div> */
     );
};

export default ItemListContainer;