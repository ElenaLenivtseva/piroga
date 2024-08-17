import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategoriesAsync = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const resp = await fetch("http://localhost:3001/categories");
    if (resp.ok) {
      const data = await resp.json();
      return { data };
    }
  }
);

export const addCategoryAsync = createAsyncThunk(
  "categories/addCategory",

  async (category) => {
    const resp = await fetch("http://localhost:3001/categories", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(category),
    });
    if (resp.ok) {
      const data = await resp.json();
      return data;
    }
  }
);

export const deleteCategoryTextAsync = createAsyncThunk(
  "categories/deleteCategoryText",

  async (categoryId) => {
    const resp = await fetch(`http://localhost:3001/categories/${categoryId}`, {
      method: "DELETE",
    });
    if (resp.ok) {
      const data = await resp.json();
      return data;
    }
  }
);

  

export const categoriesSlice = createSlice({
  name: "categories",

  initialState: [],

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        return action.payload.data;
      })
      .addCase(addCategoryAsync.fulfilled, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(deleteCategoryTextAsync.fulfilled, (state, action) => {
        const id = action.payload.id;
        const filtered = state.filter((e) => e.id !== id);
        return filtered;
        // ПЕРЕНЕСТИ В ПРОДУКТЫ, ПОТОМУ ЧТО НЕ ДОБЕРУСЬ ДО СТЕЙТА
      })
    
  },
});

export default categoriesSlice.reducer;
