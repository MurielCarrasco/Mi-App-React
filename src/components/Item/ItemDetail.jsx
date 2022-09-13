import React from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css" ;


export const ItemDetail = ({items}) => {
    const {descripcion, precio, imagen, nombre} = items;
    return (
        <div className="container">
            <div className="detail" >
                <img className="detail_imagen" src={"img/"+imagen} alt="{descripcion}" />
                <div className="content">
                    <h3 className="nombre">{nombre}</h3>
                    <h5 className="precio">$ {precio}</h5>
                    <p className="descripcion-card">{descripcion}</p>
                    <ItemCount stock={10} initial={1} onAdd={0}/>
                </div>
            </div>
        </div>
    );
}



export default ItemDetail;
