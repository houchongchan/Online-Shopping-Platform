import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import About from './About';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';

const Main = () => {
    const Slogan = () => {
        return(
            <>
                <Header text = 'Top Online Shopping Brand' />
                <Link to = '/products'>
                    <button className = 'clear-container-blue'>
                        Shopping
                    </button>
                </Link>
                <Header text = 'Featured Products' />
            </>

        )
    }

    const FeaturedProducts = () => {
        return(
            <About /> 
        )
    }



    return (
        <div className = 'container-margin'>
            <div className="slogan">
                <Slogan/> 
                <FeaturedProducts/>
                <Newsletter />
            </div>
        </div>
    )
}

export default Main
