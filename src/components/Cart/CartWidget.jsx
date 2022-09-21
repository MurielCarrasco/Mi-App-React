import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div>
        <Link> <i className="bi bi-cart2 carro"></i>   </Link> 
        <span>0</span>
        </div>
    )
}

export default CartWidget;