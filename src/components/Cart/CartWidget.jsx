import React from "react";
import { Link } from "react-router-dom";
import { useCartContext} from '../Context/CartContext';

 export const CartWidget = () => {
    const {totalprecio} = useCartContext();
    return (
        <>
        <Link> <i className="bi bi-cart2 carro"></i>   </Link> 
        <span> {totalprecio() || ''}</span>
        </>
    );
};

export default CartWidget;