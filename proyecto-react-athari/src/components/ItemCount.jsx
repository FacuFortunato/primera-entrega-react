import React, { useState } from "react";


const ItemCount = ({stock}) =>{

    const [counter, setCounter] = useState(0);
    const [stockActual, setStockActual] = useState (stock);

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

    const onAdd = () => {

        if (counter <= stockActual){
            console.log("Agregaste " + counter + " productosal carrito");
            setStockActual (stockActual - counter);
            setCounter (0);
        }
        
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
                    <button className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
};

export default ItemCount;