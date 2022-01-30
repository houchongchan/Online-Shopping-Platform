import React, {useState, useContext, useReducer, useEffect} from 'react';
import reducer from '../reducers/filter_reducer';
import {useGlobalContext} from './context'; 
import {CLEAR_FILTERS, LOAD_PRODUCTS, UPDATE_FILTERS,FILTER_PRODUCTS} from '../actions';

const FilterContext = React.createContext();

const initialState = {
  all_products: [],
  filtered_products: [],
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
}
const FilterProvider = ({ children }) => {


  const {productState} = useGlobalContext(); 
  const [filterState, dispatch] = useReducer(reducer, initialState);  

  const updateFilters = (e) => {
    let name = String(e.target.name)
    let value = e.target.value
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'color') {
      value = e.target.dataset.color
    }
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'shipping') {
      value = e.target.checked
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }
  const clearFilters = (e) => {
    dispatch({ type: CLEAR_FILTERS});
  }
  
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS })
  }, [filterState.filters])

  useEffect(() => {
    dispatch({type: LOAD_PRODUCTS, payload: productState.products})
  }, [productState]);

  return (
    <FilterContext.Provider value = {{filterState, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};


export const useFilterContext = () => {
  return useContext(FilterContext);
};
  
export { FilterContext, FilterProvider };
  