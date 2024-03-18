import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';


// pokeapi.co/api/v2/'
// `pokemon/${name}`
// business : https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=78df58fec805459caf086c63cbe2b3a9`
// all articles: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=78df58fec805459caf086c63cbe2b3a9
// tech articles: find one that works on postman
// politics: https://newsapi.org/v2/top-headlines?q=politics&apiKey=78df58fec805459caf086c63cbe2b3a9'

export const apiSlice = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://'}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name:string) => `pokeapi.co/api/v2/pokemon/${name}`
        }),
        GetBusinessArticles: builder.query({
            query: () => 'newsapi.org/v2/top-headlines/sources?category=business&apiKey=78df58fec805459caf086c63cbe2b3a9'
        }),
        GetAllArticles: builder.query({
            query: () => 'newsapi.org/v2/top-headlines?country=us&apiKey=78df58fec805459caf086c63cbe2b3a9'
        }),
        GetPoliticsArticles: builder.query({
            query: () => 'newsapi.org/v2/top-headlines?q=politics&pageSize=20&apiKey=78df58fec805459caf086c63cbe2b3a9'
        }),
        GetTechnologyArticles: builder.query({
            query: () => 'newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&pageSize=20&apiKey=78df58fec805459caf086c63cbe2b3a9'
        }),
        getArticlesById: builder.query({
            query:() => 'https://newsapi.org/v2/everything?domains=google.com,nytimes.com&apiKey=78df58fec805459caf086c63cbe2b3a9'
        }),
        getTestCallArticles: builder.query({
            query:() => 'gnews.io/api/v4/top-headlines?category=general&apikey=3962e1fc9b4bd04cb33c8325ef1ce616'
        })
        })
    })



export const { useGetPokemonByNameQuery, useGetBusinessArticlesQuery, useGetAllArticlesQuery,useGetPoliticsArticlesQuery, useGetTechnologyArticlesQuery, useGetArticlesByIdQuery,useGetTestCallArticlesQuery } = apiSlice


