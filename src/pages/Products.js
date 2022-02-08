import React from 'react';

import ProductNav from '../components/ProductNav';
import ProductList from '../components/ProductsList';
import Header from '../components/Header';


const Products = () => {





    return (
        <div className = 'container-margin'>
            <Header text = 'Products' />
            <hr/> 
   
            <ProductNav />
            <ProductList />
        </div>
    )
}

export default Products
