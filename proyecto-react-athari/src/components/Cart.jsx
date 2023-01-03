import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "./context/CartContext";

const Cart = () => {

    const {cart, removeItem, clear, sumaTotal, cartTotal} = useContext (CartContext);

    if (cartTotal () === 0){

        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-primary" role="alert">No se encontraron productos en el carrito</div>
                        <Link to={'/'} className="btn btn-primary">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end">
                                    <Link onClick={clear} className="btn btn-primary" title="Vaciar Carrito">Vaciar carrito</Link>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th className="text-center" scope="col">Cantidad</th>
                                <th className="text-center" scope="col">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt={item.nombre} width={70}/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                    <td className="text-end align-middle"><Link onClick={()=> {removeItem (item.id)}} title="Eliminar Producto"><img src="img/trash.svg" alt="Eliminar producto" width={32} /></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Suma Total</td>
                                <td className="text-center"><b>${sumaTotal ()}</b></td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;