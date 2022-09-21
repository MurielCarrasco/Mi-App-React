import React, { useState }  from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css" ;
import { Link } from "react-router-dom";

export const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (arg) => {
        setCantidad(arg);
    };
    return (
        <div className="detail">
            <img src={ "./../img/"+item.imagen} alt={item.title} />
            <div className="info">
                <h2>{item.title}</h2>
                <p className="descripcion-card">{item.descripcion}</p>
                <h3>${item.precio}.-</h3>
                     {cantidad === 0 ? (
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                            ) : (
                <Link to="/Cart">Ir al carrito</Link>
                )}
            </div>
        </div>
    );
}

export default ItemDetail;
