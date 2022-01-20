import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import { FaRegPlusSquare, FaRegMinusSquare} from 'react-icons/fa';
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs";
import { useCartContext } from '../context/cartcontext';

const SingleProduct = () => {
    const {fetchSingleProducts,productState} = useGlobalContext(); 
    const {single_product} = productState;
    const {addToCart} = useCartContext(); 

    const {browser_id} = useParams(); 

    const [imageDisplayed, setImageDisplayed] = useState(0)
    const [amount, setAmount] = useState(1);
    const [helperText, setHelperText] = useState('')



    const formatPrice = (number) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(number / 100)
    }

    useEffect(()=>{
        fetchSingleProducts(browser_id);
    }, [browser_id, fetchSingleProducts])

    // useEffect(()=>{
    //     if(amount = single_product && amount !=0){
    //         setHelperText('Sorry, We dont have  ')
    //     }

    // }, [amount])

    const increaseAmount = (e) => {
        e.preventDefault()
        if(single_product.stock === amount){
            setHelperText('Amount exceeds the available stock')
            setTimeout(()=>{setHelperText('')},2000)
            
            return
        }
        setAmount(amount+1)
    }
    const decreaseAmount = (e) => {
        e.preventDefault()
        if(single_product.stock === 0 || amount === 0){
            return
        }
        setAmount(amount-1)
    }

    const Stars = ({ stars}) => {
        const int_stars = Math.floor(stars)
        const Stars = Array.from({ length: 5 }, (_, index) => {
          const number = index + 1
          return (
            <span key={index}>
              {number <= int_stars ? (
                <BsStarFill/>
              ) : stars > (number-1)? (
                <BsStarHalf/>
              ) : (
                <BsStar />
              )}
            </span>
          )
        })
        return (
            <div>{Stars}</div>
        )
      }

    return (
        <div>
            
            <div className = 'single-product-container'>
                <Link to = '/products' className = 'clear-container'> Back </Link>
                {single_product.images? 
                <div>
                    <div className = 'align'>
                        <div className = 'grid'>
                            <img className = 'single-product-image' 
                            src = {single_product.images[imageDisplayed].url} />
                            <div className = 'small-image-container'>
                                {single_product.images.map((image, index) =>{
                                    return <img key = {index}
                                    className = {index === imageDisplayed?'small-image active-image':'small-image'}
                                    onClick = {() =>{setImageDisplayed(index) }} 
                                    src = {image.url} />
                                })}
                            </div>
                        </div>
                    </div>
                    <div className = 'flex text-display'>
                        <h4 style = {{textTransform: "capitalize"}}>{single_product.name}</h4>
                        <h5 style = {{color: 'red'}}>{formatPrice(single_product.price)}</h5>
                    </div>
                    <p className = 'description'> {single_product.description}</p>
                </div>
                :'nothing'}
                <hr />
                <h3 className = 'capitalize'> Brand:  {single_product.company}</h3>
                <h3> Stock:  {single_product.stock}</h3>

                
                <Stars stars = {single_product.stars}/>
                
                <h3> Reviews:  {single_product.reviews}</h3>
                <div className = 'amount-header'>
                    <button 
                    className = 'cart-button'
                    onClick = {increaseAmount}
                    disable = {!single_product.stock}>
                        <FaRegPlusSquare size={45}/> </button>
                    <div> {single_product.stock === 0? 0: amount} </div>
                    <button 
                    className = 'cart-button'
                    onClick = {decreaseAmount}
                    disable = {1}>
                        <FaRegMinusSquare size={45}/></button>
                </div>
                
                <Link  to = '/cart/'
                onClick = {() =>{addToCart(single_product, amount)}}
                className = 'clear-container'> Add to Cart </Link>
                <div>{helperText}</div>
            </div>
        </div>
    )
}

export default SingleProduct
