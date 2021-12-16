import React from 'react';
import {Box, Container, Typography, Grid} from '@mui/material';
import travel1 from '../../../images/Travel/travel1.png'
import travel2 from '../../../images/Travel/travel2.png'
import travel3 from '../../../images/Travel/travel5.png'
import './Travel.css'

const Travel = () => {
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
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid className='travel-img' xs={12}  item sm={6} md={4}>
                        
                        <img style={{position:'relative', width:'100%'}} src={travel1} alt="" />
                    </Grid>
                    <Grid className='travel-img' xs={12}  item sm={6} md={4}>
                     <img style={{position:'relative', width:'100%'}} src={travel2} alt="" />
                    </Grid>
                    <Grid className='travel-img'  xs={12}  item sm={6} md={4}>
                    <img style={{position:'relative', width:'100%'}} src={travel3} alt="" />
                 
                    </Grid>
                    
            </Grid>
            </Box>

      </Container>
    );
};

export default Travel;