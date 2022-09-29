import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
             sumarCantidad(item, cantidad);  
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    // corroborar si el producto ya está en el carrito (isInCart)
    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    };

    //sumar cantidad del mismo producto
    const sumarCantidad = (item, cantidad) => {
        const carritoActualizado = cart.map((producto) => { 
            if (producto.id === item.id) {
                const productoActualizado = {...producto,  
                    cantidad: producto.cantidad + cantidad,
                };
                return productoActualizado;
            } else {
                return producto;
            }
        });
        setCart(carritoActualizado);
    };
 
    const totalCantidad = () => {};

const totalprecio = () => {
    let acumulador = 0;
    cart.forEach((producto) => {
        acumulador += producto.cantidad * producto.precio
    });
    return acumulador;
};

    const eliminarProd = (id) => {
        const carritoFiltrado = cart.filter((producto) => producto.id !== id);
        setCart(carritoFiltrado);
    };
    
    const clearCart = () => {
        setCart([]);
    };

    const getCompra = (id) => {
        const prod = cart.find((producto) => producto.id === id );
        return prod?.cantidad;
    };

    return (
        <CartContext.Provider 
                value={{ cart, 
                        addToCart, 
                        clearCart, 
                        eliminarProd,
                        totalCantidad,
                        totalprecio,
                        getCompra
                         }}>
            {children}
        </CartContext.Provider> )
};

export default CartProvider;