import {  createSlice } from "@reduxjs/toolkit";





const initialState = {
    techArticles: [],
    isLoading: false,
    status: 'idle',
    error: false


};


export const techArticleSlice = createSlice({
    name: 'technologyNews',
initialState,
 reducers: {
startTechArticles(state){
    state.isLoading = true
    state.error = false
},
getTechArticles(state,action){
    state.techArticles = action.payload;
    state.isLoading = false;
    state.status ='Success'
},
failTechArticles(state){
    state.isLoading  = false
    state.error =  true;
}
 }
});

export const {startTechArticles, getTechArticles, failTechArticles} = techArticleSlice.actions;
export default techArticleSlice.reducer;



// selector vars
export const selectTechArticles = (state) => state.technologyNews.techArticles
export const getTechArticlesStatus = (state) =>  state.technologyNews.status;
export const getTechArticlesError = (state) => state.technologyNews.error;