import {  createSlice } from "@reduxjs/toolkit";






const initialState = {
    politicsArticles: [],
    isLoading: false,
    status: 'idle',
    error: false


};


export const politicsArticleSlice = createSlice({
    name:'politics_News',
initialState,
 reducers: {
startPoliticsArticles(state){
    state.isLoading = true
    state.error = false
},
getPoliticsArticles(state,action){
    state.isLoading = false
    state.politicsArticles = action.payload;

},
failPoliticsArticles(state){
    state.isLoading  = false
    state.error =  true;
}
 },
 
});

export const {startPoliticsArticles, getPoliticsArticles,failPoliticsArticles} = politicsArticleSlice.actions;
export default politicsArticleSlice.reducer;

// selector variables
