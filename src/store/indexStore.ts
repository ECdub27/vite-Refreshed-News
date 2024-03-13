import {configureStore} from '@reduxjs/toolkit'
import newsArticleReducer from './newsArticleSectionSlice';
import businessNewsSliceReducer from './businessSectionSlice';
import techArticleSliceReducer from './technologySectionSlice';
import politicsArticleSliceReducer from './politicsSectionSlice';
import {  apiSlice } from './newsApiSlice';



export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        newsArticles: newsArticleReducer,
        businessNews: businessNewsSliceReducer,
        technologyNews: techArticleSliceReducer,
        politicsNews: politicsArticleSliceReducer,
        
    },
    middleware: (getDefaultMiddleware) => 
getDefaultMiddleware().concat(apiSlice.middleware)
})