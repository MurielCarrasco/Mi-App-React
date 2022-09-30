import React from 'react';
import { useContext } from 'react';
import  { CartContext } from '../Context/CartContext';
import Form from '../form/Form';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, eliminarProd, totalprecio } = useContext(CartContext);
    
    const total = totalprecio();
    if (cart.length === 0) {
        return (
                <div className="div-link active">
                  <h1>Carrito está vacío</h1>
                  <div className="link-inicio">
                    <Link className="link" aria-current="page" to='/' >Pinche aquí para elegir productos </Link>
                  </div>
                 </div>)
    };

    return (
        <div style={{ display: 'flex',
                      justifyContent: 'center', 
                      flexDirection: 'column' }}>
            {cart.map((producto) => (
                <div key={producto.id}
                     style={{border: '1px solid black',
                             borderradius: '8px',
                             display: 'flex',
                             justifyContent: 'space-around',
                             padding: '8px',
                             margin: '8px',
                          }}>
                    <h3>{producto.Titulo}</h3>
                    <h3>Cantidad: {producto.cantidad}</h3>
                    <h3>Precio: {producto.precio} .-</h3>
                    <button onClick={() => eliminarProd(producto.id)}>Eliminar Producto</button>
                </div>
            ))}
           
            <button onClick={clearCart}>Limpiar Carrito</button>
            <h4>TOTAL: ${total}</h4>
            <div>
             <button /* onClick={<Form />} */>Formulario para Despacho</button>
                <Form />
             </div>
        </div>
        
    );
};

export default Cart;