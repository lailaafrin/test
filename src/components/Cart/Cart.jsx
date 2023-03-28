import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // // const cart=props.cart
    // const { cart } = props;
    console.log(cart);

    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 7 / 100; 

    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
           <h4>Order Summary</h4>
            <p>Selected Items: {cart.length} </p>
            <p>Total price:${total} </p>
            <p>Total shipping:${totalShipping} </p>
            <p>Taxt:{tax.toFixed(2)} </p>
            <p>Grand total:${grandTotal.toFixed(2)} </p>
            
        </div>
    );
};

export default Cart;