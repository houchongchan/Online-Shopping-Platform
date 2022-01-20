import React, { useEffect} from 'react';
import { Link} from 'react-router-dom';
import ProductNav from './ProductNav';
import {useGlobalContext} from '../context/context';
import { useFilterContext } from '../context/filter_context';
import Thumbnail from './Thumbnail';


const ProductList = () => {


    const {productState} = useGlobalContext();
    const {filterState} = useFilterContext();
    const {filtered_products, all_products, filters, sort  } = filterState
    if(filtered_products.length <1) {
        return(
                <h2>Sorry no products matched your search</h2>
        )
    }



    
    return (
        <>
            <div className="products-container">
                {filtered_products.map((product, index) =>{
                    return(

                            <Link className = 'product-thumbnails' key = {index} to = {`./${product.id}`} >
                                <Thumbnail key = {index} props = {product}/> 

                            </Link>
                    )
                })}
            </div>
        </>
    )
}

export default ProductList
