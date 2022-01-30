import React, {useState} from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useFilterContext } from '../context/filter_context';




const ProductNav = () => {
    const {filterState, updateFilters, clearFilters} = useFilterContext();
    const {filters: {
          category,
          company,
          color,
          min_price,
          max_price,
          price,
          shipping,
        }} = filterState;

    const [openFilter, setOpenFilter] = useState(false);

    const formatPrice = (number) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(number / 100)
    }

    const handleExpansion = (e) => {
        e.preventDefault()
        setOpenFilter(!openFilter);
    }

    const filterNames = (data, type) => {
        let unique = data.map((item) => item[type])
        if (type === 'colors') {
          unique = unique.flat()
        }
      
        return ['all', ...new Set(unique)]
    }

    const uniq_categories = filterNames(filterState.all_products,'category');
    const uniq_companies = filterNames(filterState.all_products,'company');
    const uniq_colors = filterNames(filterState.all_products,'colors');

    return (
        <div className = 'filter_container'>
           <form onSubmit={(e) => e.preventDefault()}>
               
                <div className={openFilter?'filter capitalize':'filter hide'}>
                    <div>
                        <h5>Category</h5>
                        {uniq_categories.map((cat, index)=>{
                            return(
                                <button key = {index} 
                                className = {`${
                                    category === cat.toLowerCase() ? 'active capitalize' : 'capitalize'
                                  }`}
                                name = 'category' 
                                value = {cat} 
                                onClick = {updateFilters}> 
                                {cat}
                                </button>
                            )
                        })}
                    </div>

                    <div>
                        <h5>Company</h5>
                        {uniq_companies.map((comp, index)=>{
                            return(
                                <button key = {index} 
                                className = {`${
                                    company === comp.toLowerCase() ? 'active capitalize' : 'capitalize'
                                  }`}
                                name = 'company' 
                                value = {comp} 
                                onClick = {updateFilters}> 
                                {comp}
                                </button>
                            )
                        })}
                    </div>

                    <div>
                        <h5>Color</h5>
                        {uniq_colors.map((col, index)=>{
                            return(
                                <button key = {index} 
                                className = {`${
                                    color === col.toLowerCase() ? 'active capitalize' : 'capitalize'
                                  }`}
                                name = 'color' 
                                value = {col} data-color={col} 
                                style = {{background: col}}
                                onClick = {updateFilters}>
                                _</button>
                            )
                        })}
                    </div>
                    <div>
                        <h5>Price</h5>
                        <h5>{formatPrice(price)}</h5>
                        <input type = 'range'
                        name = 'price'
                        onChange = {updateFilters}
                        min = {min_price}
                        max = {max_price} 
                        value = {price} />
                    </div>

                    <div>
                        <h5>Shipping</h5>
                        <input type = 'checkbox' 
                        name = 'shipping'
                        checked = {shipping}
                        onChange={updateFilters}
                        />
                    </div>
                </div>
                <button  className={openFilter?'clear-container':'clear-container hide'} 
                onClick = {clearFilters}> Clear </button>
           </form>
           <button  onClick = {handleExpansion}> 
           {openFilter?
                <FaCaretUp size={70} />: <FaCaretDown size={70} /> 
           } </button>
        </div>
    )
}

export default ProductNav
