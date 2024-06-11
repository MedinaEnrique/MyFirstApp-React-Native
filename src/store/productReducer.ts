import {createSlice} from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  description: string;
}

export interface ProductState {
  products: Product[];
  navigation?: any;
}

const initialState: ProductState = {
  products: [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripcion 1',
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripcion 2',
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripcion 3',
    },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
    updateProduct(state, action) {
      const index = state.products.findIndex(
        product => product.id === action.payload.id,
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export const {addProduct, removeProduct, updateProduct} = productSlice.actions;

export default productSlice.reducer;
