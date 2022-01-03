import React from 'react';
import {Box, Container, Typography, Grid} from '@mui/material';
import travel1 from '../../../images/Travel/travel1.png'
import travel2 from '../../../images/Travel/travel2.png'
import travel3 from '../../../images/Travel/travel5.png'
import  { useEffect } from 'react';
import './Travel.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Travel = () => {
    useEffect(()=>{
        AOS.init()
    }, [])
    return (
      <Container>
          <Box sx={{my:8}}>
          <Typography variant='caption' sx={{color:'#878a8f', letterSpacing:'.3em'}}>
              Traveling
          </Typography>       
          <Typography sx={{color:'#0f141e', fontWeight:"800", letterSpacing:'-.01em'}} variant="h4">
              Latest Tour Pictures
          </Typography>       
          </Box>
          <Box sx={{ width: '100%' }}>
            <Grid className='wrapper' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{display:'flex', justifyContent:'center', alignItems:"center"}}>
                    <Grid  className='travel-img img-box' item xs={6}   sm={6} md={4}
                    data-aos="fade-left"
                    >
                        <a href="https://www.instagram.com/naeemkhan8954/" rel='noreferrer' alt='my travel' target='_blank'>
                        <Box className='info'>
                        <img style={{ width:'100%'}} src={travel1} alt="nature" />
                        <h1>Section 1</h1>
                        </Box>
                        <Box className='desc'>
                            <h1>Detials 1</h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, necessitatibus beatae inventore libero tenetur in quo, debitis, modi eveniet labore eaque qui nam! Architecto, nihil doloribus! </p>

                        </Box>
                        </a>
                    </Grid>
                    <Grid className='travel-img img-box' xs={6}  item sm={6} md={4}
                    data-aos="fade-up"
                    >   <a href="https://www.instagram.com/naeemkhan8954/" rel='noreferrer' alt='my travel' target='_blank'>
                        <Box className='info'>
                        <img style={{ width:'100%'}} src={travel2} alt="nature" />
                        <h1>Section 1</h1>
                        </Box>
                        <Box className='desc'>
                            <h1>Detials 1</h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, necessitatibus beatae inventore libero tenetur in quo, debitis, modi eveniet labore eaque qui nam! Architecto, nihil doloribus! </p>

                        </Box>
                        </a>
                    </Grid>
                    <Grid className='travel-img img-box' xs={6}  item sm={6} md={4} 
                    data-aos="fade-right"
                    >
                        <a href="https://www.instagram.com/naeemkhan8954/" rel='noreferrer' alt='my travel' target='_blank'>
                        <Box className='info'>
                        <img style={{width:'100%'}} src={travel3} alt="nature" />
                        <h1>Section 1</h1>
                        </Box>
                        <Box className='desc'>
                            <h1>Detials 1</h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, necessitatibus beatae inventore libero tenetur in quo, debitis, modi eveniet labore eaque qui nam! Architecto, nihil doloribus! </p>

                        </Box>
                        </a>
                    </Grid>
                   
                    
            </Grid>
            </Box>

      </Container>
    );
};

export default Travel;