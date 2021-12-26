import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import "./Banner.css"
import proPic from '../../../images/myPicture.png'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Banner = () => {
    useEffect(()=>{
        AOS.init()
    }, [])
    return (
        <Box  className='banner-bg'>
            <Container>
                <Grid sx={{justifyContent:'space-between', alignItems:'center'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    
                    <Grid item xs={12} md={6} order={{ xs: 2, sm: 1 }}  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
                        <Typography sx={{color:'#878a8f'}} variant="caption" display="block">
                            Md Shohidul Islam
                        </Typography>

                        <Typography sx={{color:'#0f141e', fontWeight:"800", letterSpacing:'-.01em'}} variant="h3" gutterBottom component="div">
                        Junior Full Stack Developer
                        </Typography>
                        <Typography sx={{color:'#878a8f'}}  gutterBottom component="div">
                        Over the past 1 years, as an art director and designer, I would like worke with big companies and up-and-coming startups to successfully help them reach their full potential and attract new customers.
                        </Typography>
                    </Grid>
                    <Grid order={{ xs: 1, sm: 2 }} style={{textAlign:'center'}} item xs={12} md={6} data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" >
                        <img   src={proPic}  alt='myPciture'/>
                    </Grid>
            
                </Grid>
            </Container>

        </Box>
    );
};

export default Banner;