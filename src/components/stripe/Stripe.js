import React, { useState, useEffect } from 'react'
import {CardElement,useStripe,Elements,useElements, PaymentElement, ElementsConsumer} from '@stripe/react-stripe-js'
import {useNavigate} from 'react-router-dom'
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useCartContext } from '../../context/cartcontext'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

const Stripe = () => {
    const {contextState} = useCartContext(); 
    const navigate = useNavigate(); 

    // useEffect(() => {
    //     createPaymentIntent()
    //     // eslint-disable-next-line
    //   }, [])

    // const options = {
    //     clientSecret: '{{CLIENT_SECRET}}',
    // };

        const formatPrice = (number) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(number / 100)
    }

    // const handleSubmit = async ({e, elements, stripe }) => {
    //     e.preventDefault();
    //     if(!stripe, !elements) {return;}
    //     const cardElement = elements.getElement(CardElement);
    //     const {error, paymentMethod} = await stripe.creatPaymentMethod({type: 'card', card: cardElement});
    //     console.log(paymentMethod)
    //     if(error) {
    //         console.log(error);
    //     } else {
    //     }

    // }

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/cart', {replace: true})
    }


    const cardStyle = {
        style: {
          base: {
            color: '#32325d',
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
              color: '#32325d',
            },
          },
          invalid: {
            color: '#fa755a',
            iconColor: '#fa755a',
          },
        },
      }

    return (
        <Elements stripe={stripePromise}>
            <ElementsConsumer>
                {({elements, stripe}) =>(
                        <form className="checkout">
                        <h3>Total:  {formatPrice(contextState.cart_total)}</h3>
                        <CardElement style = {{background: 'white'}}/>
                        <hr/>
                        <div style = {{display: 'flex', justifyContent: 'space-between'}}
                            options={cardStyle}>
                            <button className ='cart-button' onClick = {handleBack}> Back</button>
                            <button> Pay</button>
                        </div>
                    </form>
                    )
                }
            </ElementsConsumer>
        </Elements>
    )
}

export default Stripe
