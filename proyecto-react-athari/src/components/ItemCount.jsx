import React, { useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, onAdd}) =>{

    const [counter, setCounter] = useState(0);
    const [stockActual, setStockActual] = useState (stock);
    const [vendido, setVendido] = useState (false)

    const incrementarStock = () => {

        if(counter < stockActual) {
            setCounter (counter + 1);
        }
    }

    const decrementarStock = () =>{

        if (counter > 0){
            setCounter (counter - 1);
        }
    }

    const addToCart = (quantity) => {

        setStockActual (stockActual - quantity);
        setVendido(true);
        onAdd(quantity);
    }

    return (
        <div className="container text-center">
            <div className="row mb-3"> 
                <div className="col-md-4">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
                    <button type="button" className="btn btn-outline-primary">{counter}</button>
                    <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4">
                    {vendido ? <Link to={"/cart"} className= "btn btn-primary"> Terminar mi compra </Link> : <button className="btn btn-primary" onClick={() => {addToCart (counter)}}>Agregar al carrito</button>}
                    
                </div>
            </div>
        </div>
    )
};

export default ItemCount;