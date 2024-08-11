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

  initialState: {
    cart: [],
    totalAmount: 0,
    totalPrice: 0,
  },

  reducers: {

    addToCart(state, action) {
      const productId = action.payload;
      const exist = state.cart.find((product) => product.id === productId.id);

      if (exist) {
        exist.amountInCart++;
        exist.totalPrice += productId.price;
        state.totalAmount++;
        state.totalPrice += productId.price;
      } else {
        state.cart.push({
          id: productId.id,
          category: productId.category,
          categoryName: productId.categoryName,
          title: productId.title,
          img: productId.img,
          composition: productId.composition,
          calories: productId.calories,
          proteins: productId.proteins,
          fat: productId.fat,
          carbo: productId.carbo,
          expiration: productId.expiration,
          description: productId.description,
          price: productId.price,
          totalPrice: productId.totalPrice,
          weight: productId.weight,
          amountInCart: 1,
        });
        state.totalAmount++;
        state.totalPrice += productId.price;
      }
    },

    removeFromCart(state, action) {
      const productId = action.payload;
      const exist = state.cart.find((product) => product.id === productId.id);

      if (exist.amountInCart === 1) {
        state.cart = state.cart.filter(
          (product) => product.id !== productId.id
        );
        state.totalAmount--;
        state.totalPrice -= productId.price;
      } else {
        exist.amountInCart--;
        exist.totalPrice -= productId.price;
        state.totalAmount--;
        state.totalPrice -= productId.price;
      }
    },
    cleanCart(state,action){
      state.cart = [];
      state.totalAmount=0;
      state.totalPrice=0;
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(getCategoriesAsync.fulfilled, (state, action) => {
    //   return action.payload.categories;
    // })
  },
});

export const { addToCart, removeFromCart, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;
