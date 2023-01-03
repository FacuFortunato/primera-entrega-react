import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const {cartTotal} = useContext (CartContext)

    return  cartTotal() ?   <div className="btn btn-primary text-centergit"><Link to={"/cart"} className="btn btn-primary position-relative" title="Ir al Carrito">
                                <img src="img/bag.svg" alt="Carrito" width={32}/>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal ()}</span>
                            </Link></div>
                        : "";

    

}

export default CartWidget;