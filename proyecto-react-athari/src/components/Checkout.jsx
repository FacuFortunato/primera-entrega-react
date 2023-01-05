import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState ,useContext } from "react";
import { CartContext } from "./context/CartContext";


const Checkout = () => {

    const {cart, clear, sumaTotal} = useContext(CartContext) ;
    const [nombre, setNombre] = useState ("");
    const [email, setEmail] = useState ("");
    const [telefono, setTelefono] = useState ("");
    const [orderId, setOrderId] = useState ("");

    const generarOrden = () => {
        const order = {
            buyer: {name: nombre, email: email, phone: telefono},
            items: cart.map (item => ({id: item.id, title: item.nombre, price: item.precio, quantity: item.quantity, price_total: item.quantity * item.precio})),
            total: sumaTotal ()
        };

        const db = getFirestore ();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            setNombre ("");
            setEmail ("");
            setTelefono ("");
            clear ();
        });
    };

    return(
        <div className="container">
            <div className="row my-5">
                <div className="col">
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Ingrese su nombre</label>
                        <input type="text" className="form-control" placeholder="Ingrese su nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Ingrese su email</label>
                        <input type="text" className="form-control" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="teléfono" className="form-label">Ingrese su teléfono</label>
                        <input type="text" className="form-control" placeholder="Ingrese su teléfono" onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={generarOrden}>Genere su orden</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt={item.nombre} width={70}/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end"><b>Total a pagar</b></td>
                                <td className="text-center"><b>${sumaTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    {orderId ? <div className="alert alert-primary" role="alert">
                        <h1>Felicitaciones !</h1>
                        <p>Tu número de orden es: {orderId}</p>
                    </div> : ""};
                </div>
            </div>
        </div>
    )
};

export default Checkout;