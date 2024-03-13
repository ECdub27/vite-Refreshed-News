import './App.css';
import NavBar from './Components/NavBar/navBar';
import HeroSlide from './Components/Header/hero';
import NewsArticle from './Components/Home/newsArticle';
// MUI themee provider
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import Container from '@mui/material/Container';
import  Box  from "@mui/material/Box";
import Footer from './Components/Footer/Footer';
import TechnologySection from './Components/Technology/techSection';
import PoliticsSection from './Components/Politics/politicsSection';
import React from 'react';

// see if you can get business sources to the right sidebar 
export type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  /** array of a type! */
  names: string[];
  /** string literals to specify exact string values, with a union type to join them together */
  status: "waiting" | "success";
  /** an object with known properties (but could have more at runtime) */
 // equivalent to dict1
  description: string;
  title: string;
  /** function type syntax that takes an event (VERY COMMON) */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  /** an optional prop (VERY COMMON!) */
  optional?: string;
  /** when passing down the state setter function returned by `useState` to a child component. `number` is an example, swap out with whatever the type of your state */
  setState: React.Dispatch<React.SetStateAction<number>>;
};

export type BaseProps={
  className?: string;
  name: string;
  style: React.CSSProperties
  position: string;
  color?: string;
  children?: React.ReactNode;
  urlToImage:string;
  title: string;
  cols?: number;
  rows?:number;
  rowHeight: number;
  flexItems: number;
 
}
export interface ApiProps{
  alt: string;
 index: string
  article: string;
  sources: object[];
  name: string;
  url: string;
  description: string;
  urlToImage:string | undefined;
  cols?: number;
}

export type ResultItems = {
  id: string
  url:{
    small: string;
    cols?:number
  };
  
  name: string;
  href: string;
  key:string;
  urlToImage:string;
  title: string;
  cols?: number;
  rows?:number;
  rowHeight: number;
  flexItems: number;
}
const theme = createTheme({
  palette: {
    primary:{
      main: '#0A0F25',
      light: '#3B3F50',
      dark: '#070A19',
    },
    secondary:{
      main: '#5F7367',
      light: '#7F8F85',
      dark: '#425048'
    }
  }
});




const App:React.FC<BaseProps> = () => {
  // make nav bar sticky
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
       <div className='search-bar'>
      <Box >
      <NavBar message={''} count={0} disabled={false} names={[]} status={'waiting'}  description={''} title={''} onChange={function (): void {
              throw new Error('Function not implemented.');
            } } onClick={function (): void {
              throw new Error('Function not implemented.');
            } } setState={function (): void {
              throw new Error('Function not implemented.');
            } }   /> 
      </Box>
      </div>
      
    <main>
    <Box sx={{borderColor:'#E0607E'}}>
        <div className='flex-container1'>
    <header className="App-header">
      <div className='hero-image'>
      <h1 className='hero-title'>A Refreshed Look from the Norm</h1>
        <div className='hero-text'>
         
        
        </div>
        </div>
        <ul>
          <li><a href='#headlines'>Top Headlines 🗞</a></li>
          <li><a href='#business'>Business Sources 📈 </a></li>
          <li><a href='#polly'>Politics 👨‍💼 👩‍💼 </a></li>
          <li><a href='#tech'>Technology 💻 </a></li>
        </ul>
       
      </header>
     
      </div>
      </Box>
  <div className='top-headlines-div-flex-container'>
    <div  className='top-headlines-content'>
    <HeroSlide  />
    <div  className='business-list-articles'>
    <NewsArticle urlToImage={''} alt={''} index={''} article={''} sources={[]} name={''} url={''} description={''} />
    </div>
    </div>
    </div>
    </main>
    
    <div className="Business.Section.div">
    
<div>

  
    
    
    </div>
  
</div>


<div className='Technology.Section.div'>
 <Container>
   <TechnologySection alt={''} index={''} article={''} sources={[]} name={''} url={''} description={''} urlToImage={undefined}  />
   </Container>
</div>

<div className='Politics.Section.div'>


 <PoliticsSection alt={''} index={''} article={''} sources={[]} name={''} url={''} description={''} urlToImage={undefined}  />
 
</div>

 <div className='footer-container'>
  
  <Footer description={'A New Take on the Norm'} title={'Refreshed News'}  />
 </div>
 
    

</ThemeProvider>

 </div>
   
  );
}

export default App;
