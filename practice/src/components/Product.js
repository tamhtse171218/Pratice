import React from 'react';

const Product = (props) => {

    return (
        <div>

            <h1>Productname:{props.productName}</h1>
            <h1>Productname:{props.price}</h1>
            <h1>Productname:{props.quantity}</h1>
            <img src={props.image} />
        </div>
    );
};

export default Product;