import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {

    //const [stockItem, setStockItem] = useState (0);
    const {addItem} = useContext (CartContext) 

    const onAdd = (quantity) =>{
        addItem(item, quantity)
    };

    /*
    const onAdd = (quantity) =>{
        setStockItem (quantity)
    };
    */

    return(

        <div className="row">
            <div className="col-md-4 offset-md-4">
                <img src={item.img} alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p><b>${item.precio}</b></p>
                <div> <ItemCount stock={10} onAdd={onAdd} /> </div>
            </div>
        </div>
    )
};

export default ItemDetail;