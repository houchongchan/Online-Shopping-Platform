import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cartreducer";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions";

const CartContext = createContext();

const InitialState = {
	cart: [],
	cart_total: 0,
};

const CartProvider = ({ children }) => {
	const [contextState, dispatch] = useReducer(reducer, InitialState);

	const removeFromCart = (id) => {
		dispatch({ type: REMOVE_FROM_CART, payload: id });
	};

	const addToCart = (item, amount) => {
		const name = item.name;
		const price = item.price;
		const id = item.id;
		const image = item.images[0].url;
		dispatch({
			type: ADD_TO_CART,
			payload: { id, name, price, amount, image },
		});
	};

	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};

	return (
		<CartContext.Provider
			value={{ contextState, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(CartContext);
};

export { CartContext, CartProvider };
