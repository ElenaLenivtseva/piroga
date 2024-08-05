import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getSliderAsync = createAsyncThunk(
	'slider/getSliderAsync',
	async () => {
		const resp = await fetch('https://668160c404acc3545a068660.mockapi.io/api/store/sliderHome');
		if (resp.ok) {
			const data = await resp.json();
            const slider = data[0]
			// console.log(slider)
			return { slider };
		}
	}
);



export const sliderSlice = createSlice({
	name: 'slider',
	initialState: [],
	reducers: {
		
	},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getSliderAsync.fulfilled, (state, action) => {
          // Add user to the state array
          return action.payload.slider;
        })
      },
	// extraReducers: {
	// 	[getSliderAsync.fulfilled]: (state, action) => {
	// 		return action.payload.slider;
	// 	},
		
		
	// },
});

// export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default sliderSlice.reducer;