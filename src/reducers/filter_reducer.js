import {LOAD_PRODUCTS, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS} from '../actions';

const filter_reducer = (state, action) => {
    switch (action.type){
        case LOAD_PRODUCTS: {
            let maxPrice = action.payload.map((p) => p.price);
            maxPrice = Math.max(...maxPrice);
            return{
                ...state, 
                all_products: action.payload,
                filtered_products: [action.payload], 
                filters: {...state.filters, max_price: maxPrice, price: maxPrice}
            }
        }
        case UPDATE_SORT: {
          break;
        }
        case SORT_PRODUCTS: {
          break;
        }
        case UPDATE_FILTERS: {
            const {name, value }= action.payload;
            return{
                ...state,
                filters: {...state.filters, [name]:value}
            }
        }
        case FILTER_PRODUCTS: {
            const { all_products } = state
            const { text, category, company, color, price, shipping } = state.filters
            let tempProducts = [...all_products];
            if (text) {
              tempProducts = tempProducts.filter((product) =>
                product.name.toLowerCase().startsWith(text)
              )
            }
            if (category !== 'all') {
              tempProducts = tempProducts.filter(
                (product) => product.category === category
              )
            }
            if (company !== 'all') {
              tempProducts = tempProducts.filter(
                (product) => product.company === company
              )
            }
            if (color !== 'all') {
              tempProducts = tempProducts.filter((product) => {
                return product.colors.find((c) => c === color)
              })
            }
            // filter by price
            tempProducts = tempProducts.filter((product) => product.price <= price)
            // filter by shipping
            if (shipping) {
              tempProducts = tempProducts.filter((product) => product.shipping === true)
            }
            return{
                ...state,
                filtered_products: tempProducts

            }
        }
        case CLEAR_FILTERS: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    company: 'all',
                    category: 'all',
                    color: 'all',
                    price: state.filters.max_price,
                    shipping: false,
                },
            }
        }
        default:  
            return state
    }
} 

export default filter_reducer; 