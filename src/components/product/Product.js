import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, price, stock, seller, features, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    function DisplayFeature(features) {
        return (
            <p style={{ margin: '0' }}>{features.description}: {features.value}</p>
        )
    }

    return (
        <div className="product-container">

            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h3>{name}</h3>
                <div className="product-details-container">
                    <div className="price-stock-add">
                        <p className="seller-name">by: {seller}</p>
                        <h3>Price: ${price}</h3>
                        <p className="stock">only {stock} left in stock - order soon</p>
                        <button onClick={() => props.function(props.product)}> {cartIcon} Add to Cart</button>
                    </div>

                    <div className="rating-feature">
                        {
                            <Rating
                                style={{ color: "rgb(255, 150, 0)" }}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                initialRating={star}
                                readonly />
                        }
                        <span> {star.toFixed(2)}</span>

                        <p><b>Features</b></p>
                        {
                            features.map(feature => DisplayFeature(feature))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;