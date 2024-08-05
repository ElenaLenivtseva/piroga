import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './sliderSlice';
import productsReducer from './productsSlice';

export default configureStore({
	reducer: {
		slider: sliderReducer,
		products: productsReducer,
	},
});