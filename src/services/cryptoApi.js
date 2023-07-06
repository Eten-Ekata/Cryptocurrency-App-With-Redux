import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key':  '2a9c18bba7msh69bb6a42eab7c9bp10be1djsn90e722dece4d'

  };
//'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85'
//'f785069e79msh30a64ed9d6f5737p1a19dajsn9013dcc0b1ab'
  const baseUrl='https://coinranking1.p.rapidapi.com';

  const createRequest = (url) => ({ url, headers: cryptoApiHeaders });


  export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
      getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      }),

  })
  })

  export const {useGetCryptosQuery, 
              useGetCryptoDetailsQuery,
              useGetCryptoHistoryQuery} = cryptoApi