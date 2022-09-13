import React from "react";
import Item from "./Item";


const ItemList = ({ items = [] }) => {
     return items.map((x) => <Item key={x.id} info={x} />);
};

export default ItemList;