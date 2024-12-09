import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Product} from '../../types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.112:3000/',
  }),
  tagTypes:["Products"],
  endpoints: builder => ({
    getProducts: builder.query<Product[], string>({
      query: () => 'products',
      providesTags:['Products']
    }),
    addProduct: builder.mutation<Product, Product>({
      query: (product) => ({
        url: 'products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags:["Products"]
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (productId) => ({
        url: `products/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } = productsApi;