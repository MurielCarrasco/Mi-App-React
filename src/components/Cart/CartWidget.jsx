import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';
import { useContext } from "react"; 

export const CartWidget = () => {
    const {totalCantidad, cart} = useContext(CartContext);
    const totalUnidades = totalCantidad();
    return (
        <div className={cart.length !== 0 ? "" : "ocultar"}>
        <Link to={'/cart'}> <i className="bi bi-cart2 carro"></i>   </Link> 
        <h4 className="cart__count">{totalUnidades}</h4>
   {/*      <span > {totalCantidad () || ''} </span> */}
        </div>
    );
};

export default CartWidget;