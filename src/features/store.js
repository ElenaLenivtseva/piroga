import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './sliderSlice';
import productsReducer from './productsSlice';
import adminReducer from './adminSlice';
import cartReducer from './cartSlice';

export default configureStore({
	reducer: {
		slider: sliderReducer,
		products: productsReducer,
		cart: cartReducer,
		admin: adminReducer
	},
});