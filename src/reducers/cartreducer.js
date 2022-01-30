import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from '../actions';

const cartreducer = (state, action) => {
    switch (action.type){
        case ADD_TO_CART: {
            const {id, name, price, amount, image} = action.payload
            const tempItem = state.cart.find((i) => i.id === id)
            const temp_total = (price * amount) + state.cart_total 
            const cost = amount*price
            if(tempItem){
                const tempCart = state.cart.map((cartItem) =>{
                    if(cartItem.id === id){
                        const newAmount = cartItem.amount + amount
                        const newCost = cartItem.cost + cost
                        return(
                            {...cartItem, amount: newAmount, cost: newCost}
                        )
                    }else {
                        return cartItem
                    }
                })
                
                return {...state, cart_total: temp_total, cart: tempCart}
            }
            return {
                ...state, cart_total: temp_total, cart:[...state.cart, {id, name, price, amount, image, cost }]
            }
            
        }
        case REMOVE_FROM_CART: {
            const id = action.payload
            const tempCart = state.cart.filter((item)=> item.id !== id)
            return {...state, cart: tempCart}
        }
        case CLEAR_CART: {
            return {cart: [], cart_total: 0}
        }
        default:  
            return state
    }
}

export default cartreducer
