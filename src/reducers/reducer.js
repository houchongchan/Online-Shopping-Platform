import {ADD_PRODUCTS, TOGGLE_SIDEBAR, GET_SINGLE_PRODUCT} from '../actions'


const reducer = (state, action) => {
    switch (action.type){
        case ADD_PRODUCTS: {

            return {
                ...state,
                products: action.payload,
            }
        }
        case TOGGLE_SIDEBAR: {
            return {
                ...state,
                sidebaropen: false,
            }
        }
        case GET_SINGLE_PRODUCT: {
            return {
                ...state,
                single_product: action.payload
            }
        }
        default:{
            return state;
        }
    }
}

export default reducer; 