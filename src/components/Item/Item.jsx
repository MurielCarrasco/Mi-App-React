import React from "react";
import estilos from './item.css';     
import { Link } from 'react-router-dom';  

const Item = ({ item }) => {
    return (
        <div className={estilos.card}>
            <Link to={`/detail/${item.id}`}>
                <img src={item.img} alt="" />
                <div className={estilos.info}>
                    <h2>{item.titulo}</h2>
                    <h4>${item.precio}.-</h4>
                    <h5>#{item.category}</h5>
                    <Link to={`/detail/${item.id}`}>
                        <button>Ver detalle del producto</button>
                    </Link> 
                </div>
            </Link>
        </div>
    );
};
export default Item;

/*   <img src={"img/"+imagen} className="card-img-top" alt={descripcion}/> */