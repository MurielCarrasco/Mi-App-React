import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [itemStock, setItemStock] = useState (stock);
    const [itemInitial, setItemInitial] = useState (initial);
    const [itemAdd, setItemAdd] = useState (onAdd);

    const modificarItems = (valor) => {
        if (valor <=itemStock && valor > 0 ){
            setItemInitial (valor);
        }
    }
    const agregarProducto = () =>{
        if (itemInitial <= itemStock) {
            setItemStock (itemStock - itemInitial);
            setItemAdd (itemAdd + itemInitial)
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <div className="input-group">
                        <input className="btn btn-secondary" type="button" value="-" onClick={() =>
                        {modificarItems(itemInitial - 1)}} />
                        <input className="form-control text-center" type="text" value={itemInitial} onChange={()=>{}} />
                        <input className="btn btn-secondary" type="button" value="+" onClick={() =>
                        {modificarItems(itemInitial + 1)}} />
                        
                    </div>
                    <div className="d-grid pt-3 gap-2">
                        <input className="btn btn-light" type="button" value="Agregar al carro" onClick={() =>
                        {agregarProducto()}}/>
                    </div>
                    <p>Productos seleccionados: {itemAdd}</p>
                </div>
            </div>
        </div>
    )
} 

export default ItemCount;
