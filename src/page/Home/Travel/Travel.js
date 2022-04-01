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
          
            <Grid className='wrapper' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{display:'flex', justifyContent:'center', alignItems:"center", overflow:'hidden'}}>
                    <Grid  className='travel-img img-box' item xs={12}   sm={6} md={4}
                    data-aos="fade-left"
                    >
                        <a href="https://www.instagram.com/naeemkhan8954/" rel='noreferrer' alt='my travel' target='_blank'>
                        <Box className='info'>
                        <img style={{ width:'100%'}} src={travel1} alt="nature" />
                        <h1>Srimangal</h1>
                        </Box>
                        <Box className='desc'>
                            <h1>Tea State</h1>
                            <p> Sreemangal (Bengali: শ্রীমঙ্গল, romanized: Srimongol) is an upazila of Moulvibazar District[1] in the Sylhet Division of Bangladesh. It is located at the southwest of the district, and borders the Habiganj District to the west and the Indian state of Tripura to the south. Sreemangal is often referred to as the 'tea capital' of Bangladesh, and is most famous for its tea fields. Other than tea, the rubber, pineapple, wood, betel, and lemon industries also exist in the upazila. </p>

                        </Box>
                        </a>
                    </Grid>
                    <Grid className='travel-img img-box' xs={12}  item sm={6} md={4}
                    data-aos="fade-up"
                    >   <a href="https://www.instagram.com/naeemkhan8954/" rel='noreferrer' alt='my travel' target='_blank'>
                        <Box className='info'>
                        <img style={{ width:'100%'}} src={travel2} alt="nature" />
                        <h1>Pottery</h1>
                        </Box>
                        <Box className='desc'>
                            <h1>Brass and Pottery</h1>
                            <p> Pottery had its roots deep in the subcontinent and Bangladesh was not an exception. Although Bangladesh is predominantly a Muslim country, pottery is predominantly a Hindu craft. Symmetrical, smooth, bright and unless it falls, it would last a long time-these attributes made things of pottery very popular. </p>

                        </Box>
                        </a>
                    </Grid>
                    <Grid  className='travel-img img-box' xs={12}  item sm={6} md={4} 
                    data-aos="fade-right"
                    >
                        <a href="https://www.instagram.com/naeemkhan8954/" rel='noreferrer' alt='my travel' target='_blank'>
                        <Box className='info'>
                        <img style={{width:'100%'}} src={travel3} alt="nature" />
                        <h1>Jaflong </h1>
                        </Box>
                        <Box className='desc'>
                            <h1>Stone collection</h1>
                            <p> Jaflong (Bengali: জাফলং) is a hill station and tourist destination in the Division of Sylhet, Bangladesh. It is located in Gowainghat Upazila of Sylhet District and situated at the border between Bangladesh and the Indian state of Meghalaya, overshadowed by subtropical mountains and rainforests. It is known for its stone collections and is home of the Khasi tribe. </p>

                        </Box>
                        </a>
                    </Grid>
                   
                    
            </Grid>
           

      </Container>
    );
};

export default Travel;