import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const OrderSummary = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    let history = useHistory()

    let netQuantity = 0;
    let price = 0;
    for (const product of props.cart) {
        let quantity = 0;
        if (!product.quantity) {
            quantity = 1;
            netQuantity += 1;
        }
        else {
            quantity = product.quantity;
            netQuantity += product.quantity
        }
        price += product.price * quantity;
    }

    const shipping = ((price / 100) * 3);
    const beforeText = price + shipping;
    const tex = (beforeText / 100) * 5;
    const totalPrice = beforeText + tex;


    const handleReviewBtnClick = () => {
        history.push('/orderPreview')
    }


    return (
        <div>
            <h4>Items ordered: {netQuantity}</h4>
            <table>
                <tbody>
                    <tr>
                        <td>Price:</td>
                        <td>${price.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping and Handling:</td>
                        <td>${shipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${beforeText.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${tex.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td><h3>Order Total:</h3></td>
                        <td><h3>${totalPrice.toFixed(2)}</h3></td>
                    </tr>
                </tbody>
            </table>
            <div>
                {props.children}
            </div>

        </div>
    );
};

export default OrderSummary;