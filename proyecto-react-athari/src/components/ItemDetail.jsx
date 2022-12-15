import React from "react";

const ItemDetail = ({item}) => {

    return(

        <div className="row">
            <div className="col-md-4 offset-md-4">
                <img src={item.img} alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p><b>${item.precio}</b></p>
            </div>
        </div>
    )
};

export default ItemDetail;