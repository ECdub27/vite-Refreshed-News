import {createSlice} from '@reduxjs/toolkit';







const initialState = {
articles: [],
error: false,
isLoading: false,
status:  'idle',
};

export const newsArticleSlice = createSlice({
    name: 'newsArticle',
    initialState,
    reducers:{
     startGetNewsArticle(state){
        state.isLoading = true;
        state.error = false;
     },
     getNewsArticleSuccess(state,action){
        state.isLoading = false
        state.articles = action.payload;

     },
     getNewsArticleFailure(state){
        state.isLoading = false; 
        state.error = true; 
     }, 
     
    }
}); 



export const {startGetNewsArticle, getNewsArticleSuccess, getNewsArticleFailure} = newsArticleSlice.actions;
export default newsArticleSlice.reducer;

// export const selectArticles = (state) => state.newsArticles.articles;
export const getNewsArticlesStatus = (state:any) => state.articles.status;
export const getNewsArticleError = (state:any) => state.articles.error;
export const selectedTopHeadlineArticles = (state: any) => state.newsArticles.articles
