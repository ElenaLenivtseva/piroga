import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getCategoriesAsync = createAsyncThunk(
	'products/getCategoriesAsync',
	async () => {
		const resp = await fetch('https://668160c404acc3545a068660.mockapi.io/api/store/products');
		if (resp.ok) {
			const categories = await resp.json();
            return {categories}
		}
	}
);

// export const fetchAsyncCategDetail = createAsyncThunk(
// 	"products/fetchAsyncCategDetail",
// 	async (id) => {
// 		const resp = await fetch(`https://668160c404acc3545a068660.mockapi.io/api/store/products`);
// 		if (resp.ok) {
// 			const categories = await resp.json();
//             return {categories}
//             // const slider = data[0]
// 			// return { slider };
// 		}
// 	  const response = await movieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`);
  
// 	  return response.data;
// 	}
//   );

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