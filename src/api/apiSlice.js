// @ts-nocheck
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// we should only have one API slice per base URL
export const apiSlice = createApi({
  tagTypes: ['contacts'],
  reducerPath: 'api', // its "api" by default
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
      // transformResponse: a middleware for manipulation before data is getting to the component
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['contacts'],
    }),
    updateContact: builder.mutation({
      query: (contact) => ({
        url: `/contacts/${contact.id}`,
        method: 'PATCH',
        body: contact,
      }),
      invalidatesTags: ['contacts'],
    }),
    removeContact: builder.mutation({
      query: ({ id }) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

/*
 * every endpoint automatically generate a react-hook
 * which we call at the component
 */

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useRemoveContactMutation,
} = apiSlice;
