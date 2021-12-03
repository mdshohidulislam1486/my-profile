import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "./Banner.css"
import proPic from '../../../images/myPicture.png'



const Banner = () => {
    return (
        <Box  className='banner-bg'>
            <Container>
                <Grid sx={{justifyContent:'space-between', alignItems:'center'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    
                    <Grid item xs={12} md={6} order={{ sm:2, md:1 }}>
                        <Typography variant="caption" display="block">
                            Md Shohidul Islam
                        </Typography>

                        <Typography variant="h3" gutterBottom component="div">
                        Junior Full Stack Developer
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                        Over the past 1 years, as an art director and designer, I would like worke with big companies and up-and-coming startups to successfully help them reach their full potential and attract new customers.
                        </Typography>
                    </Grid>
                    <Grid order={{ sm: 1, md: 2 }} style={{textAlign:'center', height:'100%'}} item xs={12} md={6} >
                        <img  src={proPic}  alt='myPciture'/>
                    </Grid>
            
                </Grid>
            </Container>

        </Box>
    );
};

export default Banner;