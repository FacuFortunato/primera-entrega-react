import React from "react";

const CartWidget = () => {

    return (
        <div className="div-btn">
            <a className="btn btn-primary position-relative " href="/">
                <img src="img/bag.svg" alt="Carrito" width={32}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </a>
            <a className="btn btn-primary position-relative " href="/">
                <img src="img/trash.svg" alt="Carrito" width={32}/>
            </a>
        </div>
    )

}

export default CartWidget;