import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategoriesAsync = createAsyncThunk(
  "products/getCategoriesAsync",
  async () => {
    const resp = await fetch("http://localhost:3001/categories");
    if (resp.ok) {
      const categories = await resp.json();
      return categories;
    }
  }
);
export const getFilteredProductsAsync = createAsyncThunk(
  "products/getFilteredProducts",
  async (type) => {
    const resp = await fetch(`http://localhost:3001/products?category=${type}`);
    if (resp.ok) {
      const filteredProducts = await resp.json();
      return filteredProducts;
    }
  }
);
export const getProductAsync = createAsyncThunk(
  "products/getProductAsync",
  async (id) => {
    const resp = await fetch(`http://localhost:3001/products/${id}`);
    if (resp.ok) {
      const product = await resp.json();
      return  product ;
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
  name: "products",
  initialState: { categories: [], selectedProduct: {}, filteredByCategory: [] },

  reducers: {
    removeSelectedProduct: (state) => {
        state.selectedProduct = {};
    },
    removeFilteredCategory: (state) => {
        state.filteredByCategory = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        return { ...state, categories: action.payload };
      })
      .addCase(getFilteredProductsAsync.fulfilled, (state, action) => {
        return { ...state, filteredByCategory: action.payload };
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        return {...state, selectedProduct: action.payload };
      });
  },
});


export const { removeSelectedProduct, removeFilteredCategory } = productsSlice.actions;
export default productsSlice.reducer;
