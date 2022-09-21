import React from "react";
/* import estilos from './item.css'; */
import './item.css';
import { Link } from 'react-router-dom';  

const Item = ({ item }) => {
    return (
        <div className="row">
        <div className="card col-md-3">
            <Link to={`/detail/${item.id}`}>
                <img src={ "./../img/"+item.imagen} alt="" />
                <div className="info">
                    <h2>{item.Titulo}</h2>
                    <h4>${item.precio}.-</h4>
                    <h5>#{item.category}</h5>
                    <Link to={`/detail/${item.id}`}>
                        <button>Ver detalle del producto</button>
                    </Link> 
                </div>
            </Link>
        </div>
        </div>
    );
};
export default Item;
