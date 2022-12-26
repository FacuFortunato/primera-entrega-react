import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{

    
    const [items, setItems] = useState([]);
    const {id} = useParams ();


    useEffect(() => {

        const fetchProductos = () => {

            fetch("../json/arrayProductos.json")
                .then(response => response.json())
                .then(productos => setItems(productos.find (item => item.id === parseInt(id))))

        }

        fetchProductos();


    }, [id]);

    return (
        <div>
            <ItemDetail item={items} />
        </div>
    )
}

export default ItemDetailContainer;