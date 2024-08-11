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
    cart:[],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      state.cart.push(product)
      console.log(state)
      state.totalAmount++;
      state.totalPrice+=product.price;
      console.log(state)
    },
    removeFromCart(state, action) {
      state.totalAmount--;
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
