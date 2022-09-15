import React from "react";
import { useEffect } from "react";
import { useState } from "react";
/* import ItemCount from "./ItemCount"; */
import ItemList from "./ItemList";
import {useParams} from "react-router-dom"

const productos = [
    {
        "id":1 ,
        "descripcion" : "Vestido con cinturón unicolor ribete fruncido", 
        "precio": 12.590 , 
        "imagen":"vestido-1.jpeg",
        "category":"Mujer"
    },
    {
        "id":2 ,
        "descripcion" : "Vestido con cinturón con estampado floral de manga mariposa bajo con fruncido",     
        "precio": 15.290, 
        "imagen":"vestido-2.jpeg",
        "category":"Mujer"
    },
    {
        "id":3 ,
        "descripcion" : "Hombres Capucha con cremallera con cordón con forro térmico sin camiseta",     
        "precio": 13.090, 
        "imagen":"hombre-capucha-3.jpeg",
        "category":"Hombre"
    },
    {
        "id":4 ,
        "descripcion" : "Hombres Cazadora mezclilla desgarro con botón delantero",
        "precio": 35.590, 
        "imagen":"hombre-cazadora-4.jpeg",
        "category":"Hombre"
    },
    {
        "id":5 ,
        "descripcion" : "Sandalias minimalista con tacón delgado con tira tobillera", 
        "precio": 16.290, 
        "imagen":"sandalia-5.jpeg",
        "category":"Mujer"
    },
    {
        "id":6 ,
        "descripcion" : "Zapatillas de skate con parche de letra con cordón delantero",   
        "precio": 21.090, 
        "imagen":"zapatilla-6.jpeg",
        "category":"Mujer"
    },
    {
        "id":7 ,
        "descripcion":"Hombres Zapatillas de skate de color combinado con cordón delantero",    
        "precio": 27.690, 
        "imagen":"zapatilla-h-7.jpeg",
        "category":"Hombre"
    },
    {
        "id":8 ,
        "descripcion":"Hombres Zapatillas de skate con estampado de letra con cordón delantero",   
        "precio": 25.190, 
        "imagen":"zapatilla-h-8.jpeg",
        "category":"Hombre"
    } 
];
const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const {categoryId} = useParams ();

    useEffect(() => {
        const promesaProductos= new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        if (categoryId) {
            promesaProductos.then(respuesta => setItems(
            respuesta.filter(Mujer => Mujer.category === categoryId)));
        }
        else {
        promesaProductos.then((respuesta) =>
            setItems(respuesta));
        }
    }, [categoryId]);
   
    
     return (
        <div className="container">
            <div className="row">
             <ItemList items={items}/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center">{props.texto}</p>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-4">
                        <ItemCount stock={10} initial={1} onAdd={0} />
                    </div>
                </div> */}
            </div>
        </div>
       /*  <div>
            {<h1> {greeting} </h1> }
        </div> */
     );
};

export default ItemListContainer;