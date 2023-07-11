import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ENDPOINT,
    prepareHeaders: (headers) => {
        const token = window.localStorage.getItem('serviceToken');

        if (token) {
            headers.set('authorization', token);
        }

        return headers;
    }
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRetry,
    endpoints: () => ({})
});
