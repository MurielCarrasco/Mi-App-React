import React from "react";
import Item from "./Item";
import estilos from "./item.css"

const ItemList = ({ items }) => {
     return (
          <div className={estilos.containerCard} >
            <div className="row">
              {items.map((item) => {
                  return <Item key={item.id} item={item} />;
              })}
            </div>
          </div>
      );
};

export default ItemList;