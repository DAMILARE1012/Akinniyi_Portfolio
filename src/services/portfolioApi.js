import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CONTACT_ENDPOINT } from '../config/site';

// All remote data flows through this API slice. Portfolio content is served
// from /data/portfolio.json today; point baseUrl at a CMS or backend later
// without touching any component.
export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BASE_URL }),
  endpoints: (builder) => ({
    getPortfolio: builder.query({
      query: () => 'data/portfolio.json',
    }),
    sendMessage: builder.mutation({
      query: (message) => ({
        url: CONTACT_ENDPOINT,
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: message,
      }),
    }),
  }),
});

export const { useGetPortfolioQuery, useSendMessageMutation } = portfolioApi;

// Lets each feature subscribe to only the part of the content it renders.
export const usePortfolioSection = (key) =>
  useGetPortfolioQuery(undefined, {
    selectFromResult: ({ data }) => ({ [key]: data?.[key] }),
  })[key];
