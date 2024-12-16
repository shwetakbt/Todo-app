// services/jsonPlaceholderApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API slice
export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), // Root URL
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts', // Just specify the relative path, no need for HTTP method like GET
    }),
  }),
});

// Export the hook for using the query
export const { useGetPostsQuery } = jsonPlaceholderApi;
