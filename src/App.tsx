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
  <div className='header-div'>
  
<div className='flex-container1'>

  <header className="App-header">
    <div className='hero-image'>
      <h1 className='hero-title'>A Refreshed Look from the Norm</h1>
      
    </div>
    
      <a href='#headlines'>Top Headlines 🗞</a>
      <a href='#business'>Business Sources 📈 </a>
      <a href='#polly'>Politics 👨‍💼 👩‍💼 </a>
      <a href='#tech'>Technology 💻 </a>
    

  </header>

</div>
</div>
  </header>
  </nav>
  <main>
    <article id='headlines'>
     <HeroSlide />
    </article>
    <aside id='business'>
      <NewsArticle key={''} message={''} count={0} disabled={false} names={[]} status={'waiting'} description={''} title={''} name={''} position={''} urlToImage={''} rowHeight={0} flexItems={0} href={''} onClick={function (): void {
                throw new Error('Function not implemented.');
              } } setState={function (): void {
                throw new Error('Function not implemented.');
              } }  />
              <div id='polly'>
       <PoliticsSection key={''} message={''} count={0} disabled={false} names={[]} status={'waiting'} description={''} title={''} name={''}  position={''} urlToImage={''} rowHeight={0} flexItems={0} href={''} onClick={function (): void {
                throw new Error('Function not implemented.');
              } } setState={function (): void {
                throw new Error('Function not implemented.');
              } } />
              </div>
    </aside>
  </main>
  <section id='tech'>
    <TechnologySection key={''} message={''} count={0} disabled={false} names={[]} status={'waiting'} description={''} title={''} name={''}  position={''} urlToImage={''} rowHeight={0} flexItems={0} href={''} onClick={function (): void {
              throw new Error('Function not implemented.');
            } } setState={function (): void {
              throw new Error('Function not implemented.');
            } } />
    </section>
  <footer>
    <Footer description={''} title={''} />
  </footer>
</body>

</ThemeProvider>
     

     
      
    
       
     
       

       
      
</div>
      // app div
   
  );
}

export default App;
