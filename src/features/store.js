import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './sliderSlice';
import productsReducer from './productsSlice';
import ordersReducer from './ordersSlice';
import cartReducer from './cartSlice';
import categoriesReducer from './categoriesSlice';

export default configureStore({
	reducer: {
		slider: sliderReducer,
		products: productsReducer,
		cart: cartReducer,
		orders: ordersReducer,
		categories: categoriesReducer
	},
});