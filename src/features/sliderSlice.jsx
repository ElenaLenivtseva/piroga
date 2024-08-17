import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSliderAsync = createAsyncThunk("orders/getOrders", async () => {
  const resp = await fetch("http://localhost:3001/slider");
  if (resp.ok) {
    const slider = await resp.json();
    return { slider };
  }
});
export const addImgAsync = createAsyncThunk(
	"slider/addImg",
  
	async (img) => {
	  const resp = await fetch("http://localhost:3001/slider", {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(img),
	  });
	  if (resp.ok) {
		const data = await resp.json()
		return data;
	  }
	}
  );
export const deleteImgAsync = createAsyncThunk(
	"slider/deleteImg",
  
	async (imgId) => {
	  const resp = await fetch(`http://localhost:3001/slider/${imgId}`, {
		method: "DELETE",
	  });
	  if (resp.ok) {
		const data = await resp.json();
		return data;
	  }
	}
  );
  
export const sliderSlice = createSlice({
  name: "slider",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSliderAsync.fulfilled, (state, action) => {
      return action.payload.slider;
    }).addCase(deleteImgAsync.fulfilled, (state, action) => {
		const id = action.payload.id;
        const filtered = state.filter((e) => e.id !== id)
        return filtered;
	  }).addCase(addImgAsync.fulfilled, (state, action) => {
        return [...state, action.payload];
      });
  },
});

// export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default sliderSlice.reducer;
