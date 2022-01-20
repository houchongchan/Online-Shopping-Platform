import React, {useEffect} from 'react'
import {useCartContext} from '../context/cartcontext';
import {Link, useNavigate} from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';


const Cart = () => {
    const {contextState, removeFromCart, clearCart} = useCartContext();
    const navigate = useNavigate();  
 

    const formatPrice = (number) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(number / 100)
    }
    
    const handleCheckOut = () => {
        navigate('../checkout', {replace: true})
    }
    console.log(contextState);

    if(!contextState) {
        
        return(
            <div>
                Loading
            </div>
        );
    }

    if(contextState.cart.length <= 0) {

        
        return(
            <div>
                Nothing,
                Please go to <Link to = '/products'> Products </Link>
                to fill the cart
            </div>
        );
    }
    return (
        <>
            <div className = 'flex flex-container'>
            <div className = 'cart-item'>
                <h3>Cart Item</h3>
                <h3>Amount</h3>
                <h3>Price</h3>
                <h3>Cost</h3>
            </div>
            <div><hr/></div>
            {contextState.cart.map((item,index) => {
                return(
                    <div key = {index}
                    className = 'cart-item hover-cart'>
                        <div className = 'flex-row'>
                            <img src = {item.image} />
                            <h3>{item.name}</h3>
                        </div>
                        <p>{item.amount}</p>
                        <p> {formatPrice(item.price)} </p>
                        <div className = 'flex-row'>
                            <p> {formatPrice(item.cost)} </p>
                            <FaTrash onClick = {() =>{removeFromCart(item.id)}}className = 'cart-button'/>
                        </div>
                    </div>)
            })}
            </div>
            <hr style = {{margin: '5rem'}} />
            <div className = 'finish'>
                <div> <span style = {{fontWeight: 'bold'}}>Cart Total:</span> {formatPrice(contextState.cart_total)}</div>
                <button className = 'finish-button' onClick = {handleCheckOut}>Check Out</button>
            </div>
            <button className = 'clear-container smaller' onClick = {clearCart}> Clear Cart </button>
        </>
    )
}

export default Cart
