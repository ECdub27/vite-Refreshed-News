import React, { Key } from 'react';
import LinearBuffer from '../../linearBuffer';
import { useGetBusinessArticlesQuery} from '../../store/newsApiSlice'
import './newsArticle.css';
import { ApiProps, AppProps } from '../../App';




const NewsArticle: React.FC<AppProps> = ()  =>{ 
  

   const {data, error, isLoading} = useGetBusinessArticlesQuery('')



  

 
   
  
// one fix is JSON.stringify(data)

return (
    <div className='business-section-div'>
       <main id="mainContent">
        
        
         {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading... <LinearBuffer /> </>
      ) : data ? (
        
        <div className='card'>
          <h2 className='Business-h2'>Business Sources </h2>
        {data.sources.map((article:ApiProps & AppProps, index:ApiProps & Key) => (
          
          <div className= 'data-div' key={index} >
           
           <p className='article-title'>{article.name}</p><p className='business-description'>{article.description}</p><a rel='noreferrer' href={article.url} target='_blank'>{article.url}</a>
           
          </div>
        ))} 
        </div>
      ) : null}
      <div className="container-fluid">
        <div className="row">
          <div className='side-bar-style'>
            
            <div className="list-group list-group-flush border-bottom">
             
              <li>

              </li>
            </div>
          </div>
          
          
        </div>
      </div>
      
    </main>
    </div>


);


};

export default NewsArticle;