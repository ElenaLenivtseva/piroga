import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getOrdersAsync = createAsyncThunk("orders/getOrders", async () => {
  const resp = await fetch("http://localhost:3001/orders");
  if (resp.ok) {
    const data = await resp.json();
    return { data };
  }
});

export const addOrderAsync = createAsyncThunk(
  "orders/addOrder",

  async (order) => {
    const resp = await fetch("http://localhost:3001/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    });
    if (resp.ok) {
      const data = await resp.json()
      return data;
    }
  }
);

export const deleteOrderAsync = createAsyncThunk(
  "orders/deleteOrder",

  async (orderId) => {
    const resp = await fetch(`http://localhost:3001/orders/${orderId}`, {
      method: "DELETE",
    });
    if (resp.ok) {
      const data = await resp.json()
      return data;
    }
  }
);
export const ordersSlice = createSlice({
  name: "orders",

  initialState: [],

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersAsync.fulfilled, (state, action) => {
        return action.payload.data;
      })
      .addCase(addOrderAsync.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(deleteOrderAsync.fulfilled, (state, action) => {
        const id = action.payload.id;
        const filtered = state.filter((e) => e.id !== id)
        return filtered;
      });
  },
});

export default ordersSlice.reducer;
