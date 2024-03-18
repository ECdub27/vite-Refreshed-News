import { useGetTestCallArticlesQuery } from '../../store/newsApiSlice'; // Import the missing function

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LinearBuffer from '../../linearBuffer'; // Import the missing component
import  Typography  from '@mui/material/Typography';
import '../Header/timeline.css';
import { ApiProps, AppProps } from '../../App'; // Import the missing types from the correct file path

import React, { Key } from 'react';



const BasicTimeline1: React.FC<AppProps> = () => {
        const {data, isLoading, error } = useGetTestCallArticlesQuery('') 
        
    return (
        <div className='api-data-timeline'>
        {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading... <LinearBuffer /> </>
            ) : data ? (
             
                <div> 
                <Timeline>
                <h2 className='timeline-h2'>What's Happening Right Now</h2>
                {data.articles.map((article:ApiProps & AppProps, index:ApiProps & Key) => (
                 <div>
                    <TimelineItem key={index.id}>
                    <TimelineSeparator>
                    <TimelineDot />
     <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography sx={{ alignContent: 'center' }} fontFamily="League Spartan" color='#E0607E'>
                            <li key={index.id}>
                                <p>{article.title}</p>
                                <p>{article.name}</p>
                                <p>{article.description}</p>
                                <a rel='noreferrer' href={article.url} target='_blank'>{article.url}</a>
                                <img src={article.image} alt='news article flick' /> 
                            </li>
                        </Typography>
                    </TimelineContent>
                    </TimelineItem>
                    </div>
                ))} 
                </Timeline>
                </div>
            

         
            ) : null}
            </div>
    );
    
}
export default BasicTimeline1;