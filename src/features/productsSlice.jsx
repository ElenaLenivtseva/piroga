import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getCategoriesAsync = createAsyncThunk(
	'products/getCategoriesAsync',
	async () => {
		const resp = await fetch('https://668160c404acc3545a068660.mockapi.io/api/store/products');
		if (resp.ok) {
			const categories = await resp.json();
            return {categories}
            // const slider = data[0]
			// return { slider };
		}
	}
);



export const productsSlice = createSlice({
	name: 'products',
	initialState: [],
	reducers: {
		
	},
    extraReducers: (builder) => {
        builder.addCase(getCategoriesAsync.fulfilled, (state, action) => {
          return action.payload.categories;
        })
      },
	
});

// export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default productsSlice.reducer;