import React from "react";
import './item.css';
import { Link } from 'react-router-dom';  

const Item = ({ item }) => {
    return (
        
        <div className="card col-md-3">
            <Link to={`/detail/${item.id}`}>
                <div className="imagen-tarjeta">
                    <img src={ "./../img/"+item.imagen} alt="" />
                </div>
                <div className="info">
                    <h3>{item.Titulo}</h3>
                    <h5>${item.precio}.-</h5>
                    <h6>#{item.category}</h6>
                    <Link to={`/detail/${item.id}`}>
                        <button>Ver detalle del producto</button>
                    </Link> 
                </div>
            </Link>
        </div>
       
    );
};
export default Item;
