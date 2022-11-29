import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () =>{

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img src="img/logo-athari.png" alt="Logo Local" width = {80}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                        <a className="nav-link active" aria-current="page" href="/juegos-ps4">Juegos PS4</a>
                                        <a className="nav-link" href="/juegos-ps5">Juegos PS5</a>
                                        <a className="nav-link" href="/consolas">Consolas</a>
                                        <a className="nav-link" href="/perifericos">Periféricos</a>
                                </div>
                                </div>
                        </div>
                    </nav>
                </div>


                <div className="col-md-6">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
};

export default Navbar;