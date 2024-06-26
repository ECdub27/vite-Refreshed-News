import React, {useState} from  'react';
import Button from '@mui/material/Button'; 
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const ScrollButton = () => {    

const [visible, setVisible] = useState(false);

const toggleVisible = () => {
 const scrolled = document.documentElement.scrollTop;
 if(scrolled > 300){
   setVisible(true);
 } else if(scrolled <=  300){
    setVisible(false);
 } else {
    setVisible(false);
 }
}
const scrollToTop = () => { 
window.scrollTo({
top: 0,
behavior: 'smooth'
});



};
window.addEventListener('scroll', toggleVisible);


return (
    <a href='#top'>
<Button href='#top'>
<ArrowCircleUpIcon  onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
</Button>
</a>
);



}; 
export default ScrollButton;    