import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Form from '../form/Form';

const Cart = () => {
    const { cart, clearCart, eliminarProducto } = useContext(CartContext);
    console.log(cart);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            {cart.map((producto) => (
                <div>
                    <h2>{producto.Titulo}</h2>
                    <button onClick={() => eliminarProducto(producto.id)}>Eliminar Producto</button>
                </div>
            ))}
           
            <button onClick={clearCart}>Clear Cart</button>
             <Form />
        </div>
    );
};

export default Cart;