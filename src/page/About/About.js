
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Navigation from '../shared/Navigation/Navigation';
import './About.css'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../../images/aboutSlide/ship1.jpg'
import bg3 from '../../images/aboutSlide/travel2.jpg'
import bg4 from '../../images/aboutSlide/travel3.jpg'
import bg5 from '../../images/aboutSlide/travel4.jpg'
import bg6 from '../../images/aboutSlide/travel6.jpg'
import bg7 from '../../images/aboutSlide/travel8.jpg'
import { maxHeight } from '@mui/system';
import { Link } from 'react-router-dom';


const About = () => {
    
    return (
        <div>
            <Navigation></Navigation>
            <Container>
              <Box sx={{maxWidth:'60rem', mx:'auto', mt:8}}>
              <Typography sx={{textAlign:{sm:'center'}, fontSize:'.875rem', lineHeight:'1.25rem', paddingTop:"5px", paddingBottom:"5px", fontWeight:"400", letterSpacing:".4em", color:'#878a8f', fontFamily:""}} className='topHead'> A FEW WORDS ABOUT ME</Typography>
                <Typography variant='h1' className='topHead' sx={{fontSize:'2.0rem', lineHeight:"2.5rem", paddingTop:'2px', paddingBottom:"3px", fontWeight:800, letterSpacing:'-0.01em', color:"#0f141e", textAlign:{sm:'center'}}}>I am a junior MERN developer and looking forward to exploring new Backend and Frontend technologies in a learning environment where I can grow with my teams.  </Typography>
                <Typography variant='h3' className='topHead' sx={{fontWeight:500,mt:4, color:'#87818f', letterSpacing:"normal", fontSize:'1rem', lineHeight:'1.5625rem', paddingTop:"1px", paddingBottom:'4px',textAlign:{sm:'center'}  }}>
                I have finished a 6-month extensive course on MERN stack and learning new technologies to keep myself updated with the upcoming technologies. Lately, I have been developing some full-stack sites such as e-commerce, restaurant, academic, etc. I  can convert any design to a web framework and implement the backend and deploy it in the production environment. <Link to='/myprojects'>Let's check out my latest developed site.</Link>  </Typography>
              </Box>
              <Box sx={{maxWidth:'70rem', mx:'auto', mt:10}}>
              <Carousel showArrows={true} >
                <div>
                    <img style={{maxHeight:"30rem"}} src={bg1} alt='bg1' />
                </div>
                <div>
                    <img style={{maxHeight:"30rem"}} src={bg6} alt='bg1' />
                </div>
                <div>
                    <img style={{maxHeight:"30rem"}} src={bg3} alt='bg1' />
                </div>
                <div>
                    <img style={{maxHeight:"30rem"}} src={bg4} alt='bg1' />
                </div>
                <div>
                    
                    <img style={{maxHeight:"30rem"}} src={bg5} alt='bg1' />
                </div>
                <div>
                    <img style={{maxHeight:"30rem"}} src={bg7} alt='bg1' />
                </div>
               
            </Carousel>
              </Box>
            </Container>
        </div>
    );
};

export default About;