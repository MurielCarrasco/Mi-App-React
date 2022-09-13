import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";

const product = {
    "id":1 ,
    "nombre": "Vestido Mujer primaveral",
    "descripcion" : "Vestido con cinturón unicolor ribete fruncido, Talla S - M - L - XL , Disponible en color Veige - Blanco - Negro - Burdeo", 
    "precio": 12590 , 
    "imagen":"vestido-1.jpeg"
};

export const ItemDetailContainer = () => {

    const [items, setItems] = useState ({});

    useEffect ( ()=> {                             // acá creo una promesa que en 2 seg resuelva el producto indicado arriba
        const getItems = new Promise((resolve) => {
            setTimeout (() => {
                resolve (product);
            }, 2000 );
        });
        getItems.then(res => setItems(res));
    }, []);

    return (
        <ItemDetail items={items} />
    );
}

export default ItemDetailContainer;





