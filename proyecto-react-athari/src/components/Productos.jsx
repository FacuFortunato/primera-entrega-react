import React from "react";

const Productos = () => {

    return (        
        <div className="col-md-12 card-ps5">
            <div className="card" style={{width: "18rem"}}>
                <img src="img/stray.png" className="card-img" alt="Stray PS5"/>
                <div className="card-body">
                    <p className="card-text">
                        Juego Stray PS5 físico.<br/><em>6 cuotas sin interés de $2500</em>
                        <button name="button" class="boton-compra"> Añadir al carrito</button>
                    </p>
                </div>
            </div>
        </div>
    )


}

export default Productos;