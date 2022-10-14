import React, { useState }  from "react";
import ItemCount from "./ItemCount";
import "./ItemDetail.css" ;
import { Link } from "react-router-dom";
import './item.css'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);
    const {addToCart, getCompra} = useContext(CartContext);
    
    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem);
        addToCart(item, cantidadItem);

        /* if(arg>0){
            addToCart(item, arg);
        } else {
            console.log("error")
        } */
    };

const quantity  = getCompra(item.id);

   /*  const restar =() => {
        count > 0 && setCount(count -1);
    };
    const agregarAlCarro = () => {
        if(count>0 && stock>=count){
            onAdd(count);
        }
    }; */

    return (
        <div className="detail">
            <img src={ "./../img/"+item.imagen} alt={item.Titulo} />
            <div className="info">
                <h2>{item.Titulo}</h2>
                <p className="descripcion-card">{item.descripcion}</p>
                <h3>${item.precio}.-</h3>
                     {cantidad === 0 ? (
                        <ItemCount stock={item.stock} 
                                   initial={quantity } 
                                   onAdd={onAdd} />
                            ) : (
                <Link to="/cart">Ir al carrito</Link>
                )}
            </div>
        </div>
    );
                            }

export default ItemDetail;
