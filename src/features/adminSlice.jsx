import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getOrdersAsync = createAsyncThunk("admin/orders", async () => {
  const resp = await fetch("http://localhost:3001/orders");
  console.log(resp);
  if (resp.ok) {
    const data = await resp.json();
    console.log(data);
    return { data };
  }
});

export const addOrderAsync = createAsyncThunk(
  "admin/addOrder",

  async (order) => {
    const resp = await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    });
    if (resp.ok) {
      const data = await resp.json()
      console.log(data)
      return data;
    }
  }
);

export const deleteOrderAsync = createAsyncThunk(
  "admin/deleteOrder",

  async (orderId) => {
    const resp = await fetch(`http://localhost:3001/orders/${orderId}`, {
      method: "DELETE",
    });
    if (resp.ok) {
      const data = await resp.json()
      // console.log(data)
      return data;
    }
  }
);
export const adminSlice = createSlice({
  name: "admin",

  initialState: {
    orders: [],
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersAsync.fulfilled, (state, action) => {
        return action.payload.orders;
      })
      .addCase(addOrderAsync.fulfilled, (state, action) => {
        return action.payload.orders;
      })
      .addCase(deleteOrderAsync.fulfilled, (state, action) => {
        // return action.payload.orders;
      });
  },
});

// export const { addToCart, removeFromCart, cleanCart } = cartSlice.actions;

export default adminSlice.reducer;
