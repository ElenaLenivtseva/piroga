import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getCategoriesAsync = createAsyncThunk(
// 	'products/getCategoriesAsync',
// 	async () => {
// 		const resp = await fetch('https://668160c404acc3545a068660.mockapi.io/api/store/products');
// 		if (resp.ok) {
// 			const categories = await resp.json();
//             return {categories}
// 		}
// 	}
// );

export const cartSlice = createSlice({
  name: "cart",
  // initialState: {
  //   cart: [],
  //   totalPrice: 0,
  // },
  initialState: {
    amount: 0,
  },
  reducers: {
    addToCart(state, action) {
      console.log(state.amount)
      state.amount++;
      console.log(state.amount)
    },
    renoveFromCart(state, action) {
      state.amount--;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getCategoriesAsync.fulfilled, (state, action) => {
    //   return action.payload.categories;
    // })
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
