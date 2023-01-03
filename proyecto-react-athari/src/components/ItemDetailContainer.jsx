import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () =>{

    
    const [items, setItems] = useState([]);
    const {id} = useParams ();


    useEffect(() => {

        const db = getFirestore ();
        const documento = doc (db, "items", id);
        getDoc(documento).then((productos) => {
            if (productos.exists ()){
                setItems({id:productos.id, ...productos.data()});
            } else {
                console.log("Error ! No se encontró el Documento !");
            }
        });


    }, [id]);

    return (
        <div>
            <ItemDetail item={items} />
        </div>
    )
}

export default ItemDetailContainer;