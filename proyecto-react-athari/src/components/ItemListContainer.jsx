import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Loading from "./Loading";



const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState (true);
    const {id} = useParams ();


    useEffect(() => {

        const db = getFirestore ();
        const itemsCollection = collection (db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)): itemsCollection;

        getDocs(q).then((productos)=> {
            setItems(productos.docs.map((doc) => ({id:doc.id, ...doc.data()})));
            setLoading (false);
        })
       


    }, [id]);

    return (

        <div className="container">
            <div className="row">
               {loading ? <Loading /> : <ItemList items={items} />} 
            </div>
        </div>
    )
}

export default ItemListContainer;