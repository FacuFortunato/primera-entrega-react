import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
// import arrayProductos from "../json/arrayProductos.json"


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams ();


    useEffect(() => {

        const db = getFirestore ();
        const itemsCollection = collection (db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)): itemsCollection;

        getDocs(q).then((productos)=> {
            setItems(productos.docs.map((doc) => ({id:doc.id, ...doc.data()})));
        })
       


    }, [id]);

    return (

        <div className="container">
            <div className="row">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer;