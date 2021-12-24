import { Typography,  Grid, Container} from '@mui/material';
import { Box, width } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
    return (
        <Box>
          <Container>

          <Box className='footer-line' sx={{textAlign:'center', my:7}}>
              <Typography variant='caption'  sx={{color:"#878a8f"}}>
                  LOOKING FOR A DEVELOPER?
              </Typography>
              <br/>
              <Link to='/contact'><Typography className='hover-underline'  sx={{fontWeight:'800', fontSize:'3.5vw'}}>
              Let's work together →
              </Typography>
              </Link>

          </Box>

          <Box >
           <Grid sx={{display:'flex', alignItems:'center'}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item sm={12} md={5}>
                    <Box>
                        <Typography variant='body1' sx={{color:'#0f141e', fontWeight:'700'}}>
                        Contact information —
                        </Typography>
                        <Typography variant="body2" sx={{color:'#878a8f'}}>
                        Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.
                        </Typography>
                        <Typography variant="caption" sx={{fontWeight:'600'}} >
                        <span style={{color:'#878a8f'}}>E:</span> snaeem.wd@gmail.com
                        </Typography>
                        <br/>
                        <Typography sx={{fontWeight:'600'}} variant="caption">
                        <span style={{color:'#878a8f'}}>P:</span> +8801681094634 (WhatsApp)
                        </Typography>

                    </Box>
                    <Box >
                        

                    </Box>
                </Grid>

                <Grid item xm={8} sm={4} md={2}>
                    <Typography variant='body1' sx={{color:'#0f141e', fontWeight:'700'}}>
                    Latest projects —
                    </Typography>
                    <Box className='link-follow' variant="body2" sx={{display:'flex', flexDirection:'column'}}>
                        <a   href="https://www.google.com/" rel="noreferrer" target='_blank' alt='myNewPro'>Iceland</a>
                        <a href="https://www.google.com/" rel="noreferrer" target='_blank' alt='myNewPro'>Iceland</a>
                        <a href="https://www.google.com/" rel="noreferrer" target='_blank' alt='myNewPro'>Iceland</a>
                        <a href="https://www.google.com/" rel="noreferrer" target='_blank' alt='myNewPro'>Iceland</a>
                    </Box>
                
                </Grid>


                <Grid item xs={8} sm={4} md={3}>
                    <Box>
                        <Typography variant='body1' sx={{color:'#0f141e', fontWeight:'700'}}>
                        Current availability —
                        </Typography>
                        <Typography variant="body2" sx={{color:'#878a8f'}}>
                        I usually work on several projects but I'll be happy to discuss new opportunities. Let's get in touch
                        </Typography>
                    </Box>
              
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Box className='link-follow'>
                        <Typography variant='body1' sx={{color:'#0f141e', fontWeight:'700'}}>
                        Follow me on —
                        </Typography>
                        <Box variant="body2" sx={{display:'flex', flexDirection:'column'}}>
                        <a href="https://www.facebook.com/md.shohidulislam.52/" rel="noreferrer" target='_blank' alt='myNewPro'>Facebook</a>
                        <a href="https://www.instagram.com/naeemkhan8954/" rel="noreferrer" target='_blank' alt='myNewPro'>Instagram</a>
                        <a href="https://www.linkedin.com/in/md-shohidul-islam-88560a155/" rel="noreferrer" target='_blank' alt='myNewPro'>LinkedIn</a>
                        <a href="https://github.com/mdshohidulislam1486" rel="noreferrer" target='_blank' alt='myNewPro'>GitHub</a>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
               

           </Box>

           <Box sx={{display:'flex', alignItems:'center', mt:5 }}>
                <div><h5 className='round-nav2'>S</h5></div>
                <div style={{lineHeight:'2px', display:'flex', marginLeft:'10px', flexDirection:'column'}}>
                    <Typography style={{ color:'#878a8f'}} variant='caption'> © 2020 - 2021 Shohidul (Naeem) </Typography>

                    <Typography variant='caption' style={{ color:'#878a8f'}}> Junior Full Stack Web Developer</Typography>
                </div>
            </Box>
          </Container>
        </Box>
    );
};

export default Footer;