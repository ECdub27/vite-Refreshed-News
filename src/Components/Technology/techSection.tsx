import { useGetTechnologyArticlesQuery } from "../../store/newsApiSlice";
import './TechnologySection.css';
import LinearBuffer from "../../linearBuffer";
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import  Typography  from '@mui/material/Typography';

import { ApiProps, ResultItems } from '../../App';
import React from 'react';


const TechnologySection:React.FC<ApiProps> = ():JSX.Element => {


const {data, isLoading,error } = useGetTechnologyArticlesQuery('');






return (
    
        <div>
        <h2>Technology</h2>
        {error ? (
               <>Oh no, there was an error</>
             ) : isLoading ? (
               <>Loading... <LinearBuffer /> </>
             ) : data ? (
              
               <>
               <ImageList sx={{width: 900, height: 700, padding:2}} >
               {data.articles.map((article:ResultItems & ApiProps) => (
                <ImageListItem className='list-item-techHeadlines' key={article.urlToImage}> 
                <Container> 
                <img className='tech-news-art'src={article.urlToImage} alt='news article flick'/>
                <Typography  sx={{alignContent: 'center'}}fontFamily="League Spartan"
           color='#E0607E'>
                 
                 <ImageListItemBar 
           title={article.title}
           subtitle={article.description}
           position="below"
           >
            <ImageListItemBar subtitle= {article.url} />
           </ImageListItemBar>
           <a rel='noreferrer' href={article.urlToImage} ><a href={article.url} > {article.url} </a></a>
           </Typography>
                 </Container>
                 </ImageListItem>
               ))} 
               </ImageList>
               </>
             ) : null}
        </div>
           
   
)



};

export default  TechnologySection;