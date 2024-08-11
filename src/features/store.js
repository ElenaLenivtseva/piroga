import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './sliderSlice';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';

export default configureStore({
	reducer: {
		slider: sliderReducer,
		products: productsReducer,
		cart: cartReducer
	},
});