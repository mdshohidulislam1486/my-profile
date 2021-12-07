import { Typography,  Grid, Container} from '@mui/material';
import { Box, width } from '@mui/system';
import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <Box>
          <Container>

          <Box className='footer-line' sx={{textAlign:'center', my:7}}>
              <Typography>
                  LOOKING FOR A DEVELOPER?
              </Typography>
              <Typography>
              Let’s work together →
              </Typography>

          </Box>

          <Box >
           <Grid sx={{display:'flex', alignItems:'center'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item sm={12} md={5}>
                    <Box>
                        <Typography variant='h6'>
                        Contact information —
                        </Typography>
                        <Typography variant="body2">
                        Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.
                        </Typography>
                        <Typography variant="body2">
                        E: damian.watracz@gmail.com
                        </Typography>
                        <Typography variant="body2">
                        P: +48-517-512-348
                        </Typography>

                    </Box>
                    <Box >
                        

                    </Box>
                </Grid>

                <Grid item xm={8} sm={4} md={2}>
                    <Typography variant='h6'>
                    Latest projects —
                    </Typography>
                    <Box variant="body2" sx={{display:'flex', flexDirection:'column'}}>
                        <a  href="https://www.google.com/" rel="noreferrer" target='_blank' alt='myNewPro'>Iceland</a>
                        <a href="https://www.google.com/" rel="noreferrer" target='_blank' alt='myNewPro'>Iceland</a>
                        <a href="https://www.google.com/" rel="noreferrer" target='_blank' alt='myNewPro'>Iceland</a>
                        <a href="https://www.google.com/" rel="noreferrer" target='_blank' alt='myNewPro'>Iceland</a>
                    </Box>
                
                </Grid>


                <Grid item xs={8} sm={4} md={3}>
                    <Box>
                        <Typography variant='h6'>
                        Current availability —
                        </Typography>
                        <Typography variant="body2">
                        I usually work on several projects but I’ll be happy to discuss new opportunities. Let’s get in touch
                        </Typography>
                    </Box>
              
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Box>
                        <Typography variant='h6'>
                        Follow me on —
                        </Typography>
                        <Box variant="body2" sx={{display:'flex', flexDirection:'column'}}>
                        <a href="https://www.google.com/" rel="noreferrer" target='_blank' alt='myNewPro'>Facebook</a>
                        <a href="https://www.google.com/" rel="noreferrer" target='_blank' alt='myNewPro'>Instagram</a>
                        <a href="https://www.google.com/" rel="noreferrer" target='_blank' alt='myNewPro'>LinkedIn</a>
                        <a href="https://www.google.com/" rel="noreferrer" target='_blank' alt='myNewPro'>GitHub</a>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
               

           </Box>

           <Box sx={{display:'flex', alignItems:'center' }}>
                <div><h5 className='round-nav'>N</h5></div>
                <div style={{lineHeight:'2px', marginLeft:'10px'}}>
                    <h3>Md Shohidul Islam</h3>
                    <p style={{fontSize:'.8em'}}> Junior Full Stack Web Developer</p>
                </div>
            </Box>
          </Container>
        </Box>
    );
};

export default Footer;