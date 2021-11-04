import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import OrderSummary from '../order-summary/OrderSummary';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Product from '../product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setdisplayProducts] = useState([])
    const [cart, setCart] = useState([])

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setdisplayProducts(data)
            })
    }, [])

    function addSummary(newProps) {
        const exist = cart.find(pdt => pdt.key === newProps.key)
        let newCart = [];
        if (exist) {
            const rest = cart.filter(pdt => pdt.key !== newProps.key);
            exist.quantity += 1;
            newCart = [...rest, newProps];
        }
        else {
            newProps.quantity = 1;
            newCart = [...cart, newProps];
        }
        setCart(newCart);
        addToDb(newProps.key)
    }

    useEffect(() => {
        if (products.length) { // প্রথমবার products কে কল করলে আনডিফাইন দেখাবে সেটা ঠেকানোর জন্য।
            const localStorageData = getStoredCart()
            const div = [];
            for (const key in localStorageData) {
                const findProductsByKey = products.find(prdt => prdt.key === key);
                const quantity = localStorageData[key];
                findProductsByKey.quantity = quantity;
                div.push(findProductsByKey);
            }
            setCart(div)
        }
    }, [products])

    const searchHandale = (event) => {
        const searchValue = event.target.value;
        const machedProducts = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
        setdisplayProducts(machedProducts);
    }

    return (
        <div className="shop">
            <div className="search-input">
                <input
                    type="text"
                    placeholder="Type your product name"
                    onChange={searchHandale}
                />
                {/* <span> {cartIcon} : {cart.length} </span> */}
            </div>

            <div className="shop-container">
                <div className="products-div">
                    {
                        products.length === 0 ? <h1>Loading...</h1> : displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            function={addSummary}
                        />)
                    }

                </div>

                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <OrderSummary cart={cart} >
                        <Link to="/orderPreview" ><button className="review-order-btn" > {cartIcon} Review your order</button></Link>
                    </OrderSummary>
                </div>
            </div>
        </div >
    );
};



export default Shop;