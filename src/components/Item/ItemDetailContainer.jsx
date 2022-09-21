import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const productosDetalle = [
    {
        "id":1 ,
        "Titulo": "Vestido con cinturón unicornio ",
        "descripcion" : "Vestido con cinturón unicolor ribete fruncido", 
        "precio": 12.590 , 
        "imagen":"vestido-1.jpeg",
        "category":"Mujer",
        "stock": "10"
    },
    {
        "id":2 ,
        "descripcion" : "Vestido con cinturón con estampado floral de manga mariposa bajo con fruncido",     
        "precio": 15.290, 
        "imagen":"vestido-2.jpeg",
        "category":"Mujer",
        "stock": "10"
    },
    {
        "id":3 ,
        "descripcion" : "Hombres Capucha con cremallera con cordón con forro térmico sin camiseta",     
        "precio": 13.090, 
        "imagen":"hombre-capucha-3.jpeg",
        "category":"Hombre",
        "stock": "10"
    },
    {
        "id":4 ,
        "descripcion" : "Hombres Cazadora mezclilla desgarro con botón delantero",
        "precio": 35.590, 
        "imagen":"hombre-cazadora-4.jpeg",
        "category":"Hombre",
        "stock": "10"
    },
    {
        "id":5 ,
        "descripcion" : "Sandalias minimalista con tacón delgado con tira tobillera", 
        "precio": 16.290, 
        "imagen":"sandalia-5.jpeg",
        "category":"Mujer",
        "stock": "10"
    },
    {
        "id":6 ,
        "descripcion" : "Zapatillas de skate con parche de letra con cordón delantero",   
        "precio": 21.090, 
        "imagen":"zapatilla-6.jpeg",
        "category":"Mujer",
        "stock": "10"
    },
    {
        "id":7 ,
        "descripcion":"Hombres Zapatillas de skate de color combinado con cordón delantero",    
        "precio": 27.690, 
        "imagen":"zapatilla-h-7.jpeg",
        "category":"Hombre",
        "stock": "10"
    },
    {
        "id":8 ,
        "descripcion":"Hombres Zapatillas de skate con estampado de letra con cordón delantero",   
        "precio": 25.190, 
        "imagen":"zapatilla-h-8.jpeg",
        "category":"Hombre",
        "stock": "10"
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
