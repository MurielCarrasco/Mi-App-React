import React from "react";
import ItemCount from "./ItemCount";

export const ItemDetail = ({product}) => {
    const {descripcion, precio, imagen} = product;
    return (
        <div className="container">
            <div className="detail" >
                <img className="detail_imagen" src={"img/"+imagen} alt="{descripcion}" />
                <div className="content">
                    <h5 className="card-title">{descripcion}</h5>
                    <p className="card-text"> $ {precio}</p>
                </div>
                <div>
                    <ItemCount />
                </div>
            </div>
        </div>
    );
}



export default ItemDetail;
