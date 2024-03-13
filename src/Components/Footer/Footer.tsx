import '../Footer/footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
 
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Twitter } from '@mui/icons-material';

function Copyright() {
  
  return (
    <Typography variant="body2" color="#E0607E" align="center">
      {'Copyright © RefreshedNews'}
      <Link color="inherit" href="https://65259151c09e63081ad3df05--ecwiegandportfolio.netlify.app/">
         💓
      </Link>{' Refreshed-News'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
type FooterProps = {
  description: string;
  title: string;
  
}

function Footer(props: FooterProps){
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: '#E0607E', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          {description}
        </Typography>
        <Copyright  />
        <ul>
          <li><GitHubIcon /> <a rel="noreferrer"href='https://github.com/ECdub27' target='_blank'>Github</a>    </li>
          <li><Twitter />     <a href='https://twiter.com/teflonboogie' target='_blank' >Twitter</a></li>
          <li><LinkedInIcon />   <a  rel="noreferrer"href='https://www.linkedin.com/in/elijah-christian-wiegand-2b59a898?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHaxx0gpmR%2Fi%2Fsj5VOQ7xgA%3D%3D' target='_blank' >LinkedIn</a></li>
        </ul>
      </Container>
    </Box>
  );
}



export default Footer;