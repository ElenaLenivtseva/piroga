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
      return product;
    }
  }
);
export const getAllProductsAsync = createAsyncThunk(
  "products/getAllProductAsync",
  async () => {
    const resp = await fetch(`http://localhost:3001/products`);
    if (resp.ok) {
      const products = await resp.json();
      return products;
    }
  }
);

export const addProductAsync = createAsyncThunk(
  "products/addProduct",

  async (product) => {
    const resp = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    });
    if (resp.ok) {
      const data = await resp.json()
      return data;
    }
  }
);
export const editProductAsync = createAsyncThunk(
  "products/editProduct",

  async (product) => {
    const resp = await fetch(`http://localhost:3001/products/${product.id}`, {
      method: 'PATCH', 
      body: JSON.stringify(product), 
      headers: {
        "content-type": "application/json"
      },
    })
    if (resp.ok) {
      const data = await resp.json()
      return data;
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "products/deleteProduct",

  async (productId) => {
    const resp = await fetch(`http://localhost:3001/products/${productId}`, {
      method: "DELETE",
    });
    if (resp.ok) {
      const data = await resp.json();
      return data;
    }
  }
);


export const productsSlice = createSlice({
  name: "products",
  initialState: {
    categories: [],
    selectedProduct: {},
    filteredByCategory: [],
    allProducts: [],
  },

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
        return { ...state, selectedProduct: action.payload };
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        return { ...state, allProducts: action.payload };
      }).addCase(addProductAsync.fulfilled, (state, action) => {
        return {...state, allProducts: [...state.allProducts, action.payload]};
      }).addCase(editProductAsync.fulfilled, (state, action) => {
        return {...state, allProducts: [...state.allProducts, action.payload]};
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        const id = action.payload.id;
        const filtered = state.allProducts.filter((e) => e.id !== id);
        return { ...state, allProducts: filtered };
      })
  },
});

export const { removeSelectedProduct, removeFilteredCategory } =
  productsSlice.actions;
export default productsSlice.reducer;
