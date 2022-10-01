import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';
 
export const CartWidget = () => {
    const {totalCantidad} = CartContext();
    return (
        <div>
        <Link> <i className="bi bi-cart2 carro"></i>   </Link> 
        <span > {totalCantidad () || ''} </span>
        </div>
    );
};

export default CartWidget;