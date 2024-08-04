import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './sliderSlice';

export default configureStore({
	reducer: {
		slider: sliderReducer,
	},
});