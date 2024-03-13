import { createSlice } from "@reduxjs/toolkit";

import {apiSlice} from './newsApiSlice';



export const extendedApiSliceBusiness =  apiSlice.injectEndpoints({
    endpoints: builder => ({
        GetBusinessArticles: builder.query({
            query: () => 'newsapi.org/v2/top-headlines/sources?category=business&apiKey=78df58fec805459caf086c63cbe2b3a9',
        
        })
    })
})

export const {useGetBusinessArticles} = extendedApiSliceBusiness
export const selectBusinessArticlesResult = extendedApiSliceBusiness.endpoints.GetBusinessArticles.select()
 






const initialState = {
    status: 'idle',
    articles: [],
    error: false,
    isLoading: false
};

export const businessNewsSlice = createSlice({
 name: 'businessNews',
 initialState,
 reducers:{
startGetBusinessNews(state,action){
state.isLoading = true;
state.error = false;
},
getBusinessNewsSuccess(state,action){
    const businessNewsId = action.payload
    state.articles[businessNewsId] = businessNewsId
    state.isLoading = false
    state.articles = state.articles.push(action.payload)

},
getBusinessNewsFailure(state){
    state.isLoading = false;
    state.error = true;
},
urlSelected: {
    reducer(state,action){
        const {url, image, businessNewsId} = action.payload
        state.articles[businessNewsId].url = url
        state.articles[businessNewsId].image = image
    }
}
 }
});

export const {startGetBusinessNews, getBusinessNewsSuccess, getBusinessNewsFailure, urlSelected,extraReducers} = businessNewsSlice.actions
export default businessNewsSlice.reducer;




 export const getBusinessNewsStatus = (state) => state.businessNews.status;
 export const getBusinessNewsError =(state) => state.businessNews.error;