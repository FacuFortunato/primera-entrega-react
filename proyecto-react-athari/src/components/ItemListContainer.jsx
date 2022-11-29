import React from "react";

const ItemListContainer = ({greeting}) => {

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p>{greeting}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer ;