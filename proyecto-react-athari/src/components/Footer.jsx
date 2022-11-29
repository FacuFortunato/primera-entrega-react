import React from "react";

const Footer = () => {

    return (
        <footer className="row">
            <ul className="col-md-6"> 
                <h2>Sucursales</h2>
                <li> Calle 54 Nº612, 7 y 8. La Plata.</li>
                <li> Calle 12 Nº521, 62 y 63. La Plata.</li>
            </ul>
            <div className="col-md-6">
                <h2>Redes</h2>
                <a href="https://web.whatsapp.com/" target="_blank"><img className="img-redes" src="img/whatsapp.png" alt="Logo Whatsapp"/></a>
                <a href="https://www.instagram.com/" target="_blank"><img className="img-redes" src="img/facebook.png" alt="Logo Instagram"/></a>
                <a href="https://es-la.facebook.com/" target="_blank"><img className="img-redes" src="img/instagram.png" alt="Logo Facebook"/></a>
            </div>
            <h3>Todos los derechos reservados</h3>
        </footer>
    )
}

export default Footer;