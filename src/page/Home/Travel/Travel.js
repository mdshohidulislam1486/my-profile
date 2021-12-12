import React from 'react';
import {Box, Container, Typography, Grid} from '@mui/material';
import travel1 from '../../../images/Travel/travel1.png'
import travel2 from '../../../images/Travel/travel2.png'
import travel3 from '../../../images/Travel/travel5.png'

const Travel = () => {
    return (
      <Container>
          <Box>
          <Typography sx={{color:'#878a8f'}}>
              Traveling
          </Typography>       
          <Typography sx={{color:'#0f141e', fontWeight:"800", letterSpacing:'-.01em'}} variant="h4">
              Laterst Tour Pictures
          </Typography>       
          </Box>
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={12}  item sm={6} md={4}>
                        <img style={{position:'relative', width:'100%'}} src={travel1} alt="" />
                    </Grid>
                    <Grid xs={12}  item sm={6} md={4}>
                     <img style={{position:'relative', width:'100%'}} src={travel2} alt="" />
                    </Grid>
                    <Grid  xs={12}  item sm={6} md={4}>
                    <img style={{position:'relative', width:'100%'}} src={travel3} alt="" />
                 
                    </Grid>
                    
            </Grid>
            </Box>

      </Container>
    );
};

export default Travel;