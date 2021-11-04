import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = products => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        if (products.length) {
            const localStorageData = getStoredCart()
            const div = [];
            for (const key in localStorageData) {
                const findProductsByKey = products.find(prdt => prdt.key === key);
                if (findProductsByKey) {
                    const quantity = localStorageData[key];
                    findProductsByKey.quantity = quantity;
                    div.push(findProductsByKey);
                }
            }
            setCart(div)
        }
    }, [products])


    return [cart, setCart];
};

export default useCart;