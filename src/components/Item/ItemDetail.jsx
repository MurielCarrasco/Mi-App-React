import React, { useState }  from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css" ;


export const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (arg) => {
        setCantidad(arg);
    };
    return (
        <div className="detail">
            <img src={item.img} alt={item.title} />
            <div className="info">
                <h2>{item.title}</h2>
                <p className="descripcion-card">{item.descripcion}</p>
                <h3>${item.price}.-</h3>
                     {cantidad === 0 ? (
                <h2>Cantidad es 0</h2>
                            ) : (
                <h2>Cantidad es {cantidad}</h2>
                        )}
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
}

export default ItemDetail;
