import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [displayProducts, setdisplayProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setdisplayProducts(data)
            })
    }, [])

    return { products, setProducts, displayProducts, setdisplayProducts }
};

export default useProducts;