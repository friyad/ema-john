import React from 'react';
import './ReviewProducts.css'


const ReviewProducts = (props) => {
    const { name, img, price, stock, seller, features, star, quantity, key } = props.crt;
    // console.log(props)

    return (
        <div className="review-product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <h4>${price}</h4>
                <p>Sold by: {seller}</p>
                <h4>Quantity: {quantity}</h4>
                <button onClick={() => props.handleRemove(key)} className="product-remove-btn">Remove</button>

            </div>
        </div>
    );
};

export default ReviewProducts;