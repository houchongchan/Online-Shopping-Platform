import React from 'react';
import {Link} from 'react-router-dom';
import About from './About';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import shopping from '../img/shopping.mp4';

const Main = () => {
    const Slogan = () => {
        return(
            <>
                <Header text = 'Top Online Shopping Brand' />
                <div className = 'hero'>
                    <video  src = {shopping} autoPlay loop muted type = 'video/mp4'><a href="https://www.vecteezy.com/video/1625419-clouds-and-sky-animated-background"></a></video>
                    <Link to = '/products'>
                        <button className = 'btn-shopping'>
                            Shop Here
                        </button>
                    </Link>
                </div>
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
