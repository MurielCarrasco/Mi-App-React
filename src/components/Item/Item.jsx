import React from "react";


const Item = ({info}) => {
    const {descripcion, precio, imagen} = info;
    /* const src  = require(`${imagen}`); */

     return (
        <div className="col-md-3">
            <div className="card" >
                <img src={"img/"+imagen} className="card-img-top" alt={descripcion}/>
                <div className="card-body">
                    <h5 className="card-title">{descripcion}</h5>
                    <p className="card-text">{precio}</p>
                    <button className="btn btn-primary" onClick={""} >Ver Detalle del producto</button>
                </div>
            </div>
        </div>
     );
};

export default Item;