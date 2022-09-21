import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const productosDetalle = [
    {
        "id":1 ,
        "Titulo": "Vestido con cinturón unicornio ",
        "descripcion" : "Vestido con cinturón unicolor ribete fruncido", 
        "precio": 12590 , 
        "imagen":"vestido-1.jpeg",
        "category":"Mujer",
        "stock": "10"
    },
    {
        "id":2 ,
        "Titulo": "Vestido con cinturón",
        "descripcion" : "Vestido con cinturón con estampado floral de manga mariposa bajo con fruncido",     
        "precio": 15290, 
        "imagen":"vestido-2.jpeg",
        "category":"Mujer",
        "stock": "10"
    },
    {
        "id":3 ,
        "Titulo": "Capucha con cremallera",
        "descripcion" : "Hombres Capucha con cremallera con cordón con forro térmico sin camiseta",     
        "precio": 13090, 
        "imagen":"hombre-capucha-3.jpeg",
        "category":"Hombre"
    },
    {
        "id":4 ,
        "Titulo": "Cazadora mezclilla",
        "descripcion" : "Hombres Cazadora mezclilla desgarro con botón delantero",
        "precio": 35590, 
        "imagen":"hombre-cazadora-4.jpeg",
        "category":"Hombre"
    },
    {
        "id":5 ,
        "Titulo": "Sandalia Mujer",
        "descripcion" : "Sandalias minimalista con tacón delgado con tira tobillera", 
        "precio": 16290, 
        "imagen":"sandalia-5.jpeg",
        "category":"Mujer"
    },
    {
        "id":6 ,
        "Titulo": "Zapatilla Hombre Skate parche",
        "descripcion" : "Zapatillas de skate con parche de letra con cordón delantero",   
        "precio": 21090, 
        "imagen":"zapatilla-6.jpeg",
        "category":"Mujer"
    },
    {
        "id":7 ,
        "Titulo": "Zapatilla Hombre Skate",
        "descripcion":"Hombres Zapatillas de skate de color combinado con cordón delantero",    
        "precio": 27690, 
        "imagen":"zapatilla-h-7.jpeg",
        "category":"Hombre"
    },
    {
        "id":8 ,
        "Titulo": "Zapatilla Hombre Skate estampado",
        "descripcion":"Hombres Zapatillas de skate con estampado de letra con cordón delantero",   
        "precio": 25190, 
        "imagen":"zapatilla-h-8.jpeg",
        "category":"Hombre"
    }  
];

export const ItemDetailContainer = () => {

    const [item, setItem] = useState ({});
    const {detalleId} = useParams ();

    useEffect(() => {
        const promesaP= new Promise((resolve) => {
            setTimeout(() => {
                resolve(productosDetalle);
            }, 500);
        });

        if (detalleId) {
            promesaP.then(respuesta => {setItem(respuesta.find(producto => producto.id === Number(detalleId))
                )});
             }
             }, [detalleId]);
   
	return( 
    <div>
        <ItemDetail item={item} />;
    </div>)

};

export default ItemDetailContainer;
