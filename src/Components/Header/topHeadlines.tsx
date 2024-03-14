import {useGetAllArticlesQuery} from '../../store/newsApiSlice';
import LinearBuffer from '../../linearBuffer';
import './topHeadlines.css';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import  Typography  from '@mui/material/Typography';
import { ApiProps, AppProps, BaseProps, ResultItems } from '../../App';
import React, { Key } from 'react';

const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};


const TopHeadlines: React.FC<AppProps | BaseProps> = (): JSX.Element =>{

    const {data, isLoading, error } = useGetAllArticlesQuery('');
 // use image list with subheader for links and to format the return data..
// add calls if it messes up the UI

    return (
 <div>
 <h2>Here Are Your Top Headlines</h2>
 {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading... <LinearBuffer /> </>
      ) : data ? (
       
        <>
        <ImageList sx={{width: 900, height: 800, padding:2}}>
        {data.articles.map((article, index) => (
          <ImageListItem key={article.urlToImage}> 
          <Container> 
           <img {...srcset(article.urlToImage, 121, article.rows, article.cols)} className='All-news-img'src={article.urlToImage} alt={article.title}/>
           <Typography  sx={{alignContent: 'center'}}fontFamily="League Spartan"
           color='#E0607E'>

           <ImageListItemBar 
           title={article.title}
           subtitle={article.description}
           position="below"
           >
            <ImageListItemBar subtitle= {article.url} />
           </ImageListItemBar>
           <a rel='noreferrer' href={article.urlToImage}><a rel='noreferrer' target='_blank'href={article.url}> {article.url} </a></a>
           </Typography>
            </Container>
          <div className='headlines-div'key={index}>
           
          
         
          </div>
          </ImageListItem>
        ))} 
        </ImageList>
        </>
      ) : null}
 </div>

    );

}

export default TopHeadlines;

