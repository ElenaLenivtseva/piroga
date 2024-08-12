import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getOrdersAsync = createAsyncThunk(
	'admin/orders',
	async () => {
		const resp = await fetch('https://668160c404acc3545a068660.mockapi.io/api/store/admin');
		if (resp.ok) {
			const data = await resp.json();
            const orders = data[1]
			return { orders };
		}
	}
);

export const adminSlice = createSlice({
  name: "admin",

  initialState: {
    orders: [],
    
  },

  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getOrdersAsync.fulfilled, (state, action) => {
      return action.payload.orders;
    })
  },
});

// export const { addToCart, removeFromCart, cleanCart } = cartSlice.actions;

export default adminSlice.reducer;
