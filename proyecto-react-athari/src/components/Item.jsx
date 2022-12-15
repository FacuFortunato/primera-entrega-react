import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {


    return (
        <Link to={"/item/" + item.id}>
            <div className="col-md-8 card-ps5">
                <div className="card">
                    <img src={item.img} className="card-img img-fluid" alt={item.nombre}/>
                    <div className="card-body">
                        <p className="card-text">
                            {item.nombre}<br/><em>$ {item.precio}</em>
                            <button name="button" className="boton-compra"> Añadir al carrito</button>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
        
    )
}


export default Item ;