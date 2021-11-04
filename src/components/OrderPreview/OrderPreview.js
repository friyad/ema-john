import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import OrderSummary from '../order-summary/OrderSummary'
import ReviewProducts from './ReviewProducts/ReviewProducts';
import { deleteFromDb, clearTheCart } from '../../utilities/fakedb'
import './OrderReview.css'
import useAuth from '../../Hooks/useAuth';

const OrderPreview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const { user } = useAuth()

    const handleRemove = (key) => {
        const newCart = cart.filter(crt => crt.key !== key)
        setCart(newCart)
        deleteFromDb(key)
    }

    const placeOrderAndRemoveData = () => {
        if (user.email) {
            clearTheCart()
        }
    }

    return (
        <div className="orders-container">
            <div className="review-products-div">
                {
                    cart.length === 0 ? <h2>Your ordered 0 items. Please Add something on your cart...</h2> :
                        cart.map(crt => <ReviewProducts
                            handleRemove={handleRemove}
                            crt={crt}
                        />)
                }
            </div>
            <div className="order-summary">
                <OrderSummary cart={cart} >
                    <Link
                        to={
                            cart.length !== 0 && "/placeOrder"
                        }
                    ><button onClick={placeOrderAndRemoveData} className="review-order-btn" >Place Order</button></Link>
                    <Link to="/shop" > <button className="review-order-btn" >Back</button></Link>
                </OrderSummary>
            </div>
        </div >
    );
};

export default OrderPreview;