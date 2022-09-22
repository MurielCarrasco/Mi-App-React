import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    
    const sumar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        setCount(count - 1);
    };
    const agregarAlCarro = () => {
        onAdd (count);
    };

    return (
        <div className="container-fluid">
            <div className="input-grou">
                <button onClick={sumar} className="m-1">+</button>
                <button onClick={restar}>-</button>
                <p>Count: {count} </p>
                <button onClick={agregarAlCarro}>Agregar al carrito</button>       
            </div>
        </div>
    )
} 

export default ItemCount;
