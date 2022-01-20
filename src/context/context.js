import React, {useState, useContext, useEffect, useReducer} from 'react';
import axios from 'axios';
import reducer from '../reducers/reducer'; 
import { ADD_PRODUCTS, GET_SINGLE_PRODUCT} from '../actions';

const single_product_url = `${process.env.REACT_APP_URL}?id=`;

const initialState = {
  sidebaropen: false,
  products: [], 
  single_product: [], 
}
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: '' });
    const [products, setProducts] = useState([]);

    const [productState, dispatch] = useReducer(reducer, initialState);


    const fetchProducts = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        const data = await response.data;
        if(data){
            setProducts(data);
            dispatch({type: ADD_PRODUCTS, payload: data}); 
            setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSingleProducts = async (id) => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://course-api.com/react-store-single-product?id=${id}`)
        const singleProduct = await response.data
        dispatch({ type: GET_SINGLE_PRODUCT, payload: singleProduct })
  
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchProducts(`${process.env.REACT_APP_URL}`);
    }, []);
    

    // useEffect(() => {
    //   console.log(products);
    // }, [products]);
  
    return (
      <AppContext.Provider value={{ productState, fetchSingleProducts }}>
        {children}
      </AppContext.Provider>
    );
};


  export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider };
  