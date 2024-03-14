import {fetchBusinessNews, getBusinessNewsStatus
} from '../../store/businessSectionSlice';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import LinearBuffer from '../../linearBuffer';
import './businessSection.css';
import { selectBusArticles } from '../../store/businessSectionSlice';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const BusinessSection = () =>{
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

const dispatch = useDispatch();
// const {articles, isLoading} = useSelector((state) => state.businessNews.articles)
 const articles = selectBusArticles
console.log(useSelector)


useEffect(() =>{
    dispatch(fetchBusinessNews())
},[])
// promise ismapped out; lets use no referrer might need Router




return (
    <div className='business-section-div'>
       <h2 className='Business-h2'>Business News</h2>
       
       {Object.values(articles)?.map((busArticle) =>(
        
        <div  className='card'>
        <p className='article-title' key={busArticle.id}>{busArticle.title}</p>
    
        <ol className='unordered-list'>
           
     <li className='business-description'>{busArticle.description}</li>
           
        </ol>
        
        </div>
        
       ))}
       
    </div>
   
)


};

export default BusinessSection;