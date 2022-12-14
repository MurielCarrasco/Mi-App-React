import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);

  const { addItem } = useCartContext();

  function onAdd(quantity) {
    setGoToCart(true);
    addItem(item, quantity);
  }

  return (
    <div className="container-card mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={ "./../img/"+item.imagen}
            alt={item.Titulo}
            className="img-fluid item-detail__img"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-center item-detail__title">{item.Titulo}</h2>
          <p>{item.descripcion}</p>
          <p className="text-center">${item.precio}</p>
          {goToCart ? (
            <div className="row mt-5">
              <div className="col-md-6 text-center">
                <Link to="/cart">
                  <button className="btn btn-primary">Ir al carrito</button>
                </Link>
              </div>
              <div className="col-md-6 text-center">
                <Link to="/">
                  <button className="btn btn-primary">Seguir comprando</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="col-md-6 offset-3">
              <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;