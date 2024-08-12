import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getOrdersAsync = createAsyncThunk(
	'admin/orders',
	async () => {
		const resp = await fetch('https://668160c404acc3545a068660.mockapi.io/api/store/admin');
		if (resp.ok) {
			const data = await resp.json();
            const orders = data[1]
            console.log(orders)
			return { orders };
		}
	}
);
export const addOrderAsync = createAsyncThunk(
	'admin/orders',
	async (order) => {
		const resp = await fetch('https://PROJECT_TOKEN.mockapi.io/tasks/orders', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(order)
          })
            if (resp.ok) {
                return resp.json();
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
