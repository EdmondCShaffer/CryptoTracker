import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_CRYPTONEWS_RAPID_API_KEY
const cryptoNewsHeaders = {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com';


const createRequest = (url: string) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory}) => createRequest(`/v1/${newsCategory}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi