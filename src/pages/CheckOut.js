import React from 'react';
import Stripe from '../components/stripe/Stripe.js'
import { useUserContext } from '../context/usercontext.js';

const CheckOut = () => {
    const { currentUser, loginWithRedirect} = useUserContext();

    return (
        <div className="checkout-title">
            <h1>Check Out</h1>  
            {currentUser? <Stripe/> : 
                <div> Please <button className = 'cart-button' style = {{fontSize: '1rem'}}onClick = {loginWithRedirect}> 
                    Login
                </button> to checkout</div>}   
        </div>
    )
}

export default CheckOut
