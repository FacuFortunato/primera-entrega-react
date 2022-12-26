import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";


const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams ();


    useEffect(() => {

        const fetchProductos = () => {

            fetch("../json/arrayProductos.json")
                .then(response => response.json())
                .then(productos => id ? setItems(productos.filter(item => item.categoria === id)) : setItems (productos))

        }

        fetchProductos();


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