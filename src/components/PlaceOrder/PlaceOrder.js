import React from 'react';
import './PlaceOrder.css'
import giphy from '../../images/giphy.gif'

const PlaceOrder = () => {
    return (
        <div className="placeOrder">
            <img src={giphy} alt="" />
            <h1>------------Your order has been recived-----------</h1>
            <h1>Thanks for your order </h1>
        </div>
    );
};

export default PlaceOrder;