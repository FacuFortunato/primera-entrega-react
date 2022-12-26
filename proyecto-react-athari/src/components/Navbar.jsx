import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () =>{

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src="img/logo-athari.png" alt="Logo Local" width = {80}/></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                        <NavLink className="nav-link active" aria-current="page" to={"/category/juego-ps4"}>Juegos PS4</NavLink>
                                        <NavLink className="nav-link" to={"/category/juego-ps5"}>Juegos PS5</NavLink>
                                        <NavLink className="nav-link" to={"/category/joystick"}>Joysticks</NavLink>
                                        <NavLink className="nav-link" to={"/category/perifericos"}>Periféricos</NavLink>
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