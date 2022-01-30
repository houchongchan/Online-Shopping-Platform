import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import About from './About';
import Newsletter from '../components/Newsletter';

const Main = () => {
    const Slogan = () => {
        return(
            <>
                <h1> Top Online Shopping Brand</h1>
                <Link to = '/products'>
                    <button>
                        Shopping
                    </button>
                </Link>
                <h1> Featured Products </h1>
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
