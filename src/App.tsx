import './App.css';
import SearchAppBar from './Components/NavBar/navBar';
import HeroSlide from './Components/Header/hero';
import NewsArticle from './Components/Home/newsArticle';
// MUI themee provider
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

import Footer from './Components/Footer/Footer';
import TechnologySection from './Components/Technology/techSection';
import PoliticsSection from './Components/Politics/politicsSection';
import React from 'react';

// NavBar HeroSlide NewsArticle TechnologySection PoliticsSection
// see if you can get business sources to the right sidebar 
export type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  names: string[];
  status: "waiting" | "success";
  description: string;
  title: string;
  className?: string;
  name: string;
  position: string;
  color?: string;
  children?: React.ReactNode;
  urlToImage:string;
  cols?: number;
  rows?:number;
  rowHeight: number;
  flexItems: number;
  href: string;
  key:string;
  id?: string;
  image?: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  optional?: string;
  setState: React.Dispatch<React.SetStateAction<number>>;
};


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
  id?: string;
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




const App: React.FC = () => {
  // make nav bar sticky
  return (
    
    
      
    <div className="App">
  
<ThemeProvider theme={theme}>
<body>
<SearchAppBar />

  <nav>
  <header>
  


  <header className="App-header">
    <div className='hero-image'>
      <h1 className='hero-title'>A Refreshed Look from the Norm</h1>
      
    </div>
    
      <a href='#headlines'>Top Headlines 🗞</a>
      <a href='#business/politics'>Business Sources & Politics News 📈 </a>
      <a href='#technology'>Technology 💻 </a>
    

  </header>
  </header>
  </nav>


  <main>
    <section className="timeline" id='headlines'>
      <a href="#headlines">
      <HeroSlide />
      </a>
    </section>
    <aside>
      <div className="aside-top" id='business/politics'>
       
        <NewsArticle key={''} message={''} count={0} disabled={false} names={[]} status={'waiting'} description={''} title={''} name={''} position={''} urlToImage={''} rowHeight={0} flexItems={0} href={''} onClick={function (): void {
                  throw new Error('Function not implemented.');
                } } setState={function (): void {
                  throw new Error('Function not implemented.');
                } } /> 
        
        <PoliticsSection key={''} message={''} count={0} disabled={false} names={[]} status={'waiting'} description={''} title={''} name={''} position={''} urlToImage={''} rowHeight={0} flexItems={0} href={''} onClick={function (): void {
                  throw new Error('Function not implemented.');
                } } setState={function (): void {
                  throw new Error('Function not implemented.');
                } } /> 
                
      </div>
      <div className="aside-bottom" id='technology'>
        <a href='#technology'>
        <TechnologySection key={''} message={''} count={0} disabled={false} names={[]} status={'waiting'} description={''} title={''} name={''} position={''} urlToImage={''} rowHeight={0} flexItems={0} href={''} onClick={function (): void {
                  throw new Error('Function not implemented.');
                } } setState={function (): void {
                  throw new Error('Function not implemented.');
                } } />
                </a>
      </div>
    </aside>
  </main>
 


  <footer className="app-footer">
  <Footer description={''} title={''} />
</footer>






</body>



     

     
      
    
       
     
       

       
</ThemeProvider>    
</div>
      // app div
   
  );
}

export default App;
