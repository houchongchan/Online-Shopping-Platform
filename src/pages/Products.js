import React from 'react';

import ProductNav from '../components/ProductNav';
import ProductList from '../components/ProductsList';



const Products = () => {





    return (
        <div className = 'container-margin'>
            <h1>
                Products
            </h1>
            <hr/> 
   
            <ProductNav />
            <ProductList />
        </div>
    )
}

export default Products
