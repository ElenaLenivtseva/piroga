import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getSliderAsync = createAsyncThunk("orders/getOrders", async () => {
	const resp = await fetch("http://localhost:3001/slider");
	if (resp.ok) {
	  const slider = await resp.json();
	  return { slider };
	}
  });



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