import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import React from 'react';
import './BasicProject.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import travel1 from '../../../images/Travel/travel1.png'
import travel2 from '../../../images/Travel/travel2.png'
import travel3 from '../../../images/Travel/travel5.png'

const itemData = [
    {
      img:"https://i.ibb.co/tXSN7S4/doctor.jpg",
      title: 'Breakfast',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://i.ibb.co/f91XcBL/hero.jpg',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://i.ibb.co/Sry3cY1/honda.jpg',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://i.ibb.co/CH7MZ1T/emajon.jpg',
      title: 'Coffee',
      author: '@nolanissac',
      cols: 2,
    }
  ];

const BasicProjects = () => {
    return (
        <Container sx={{my:6}}>
            <Typography  variant='caption' sx={{color:'#878a8f', letterSpacing:'.3em'}}>
                Simple React, HTML, and CSS Projects 
            </Typography>
            <Typography sx={{color:'#0f141e', fontWeight:"800", letterSpacing:'-.01em'}} variant="h4"  >
                Latest Projects 
            </Typography>

            <Box sx={{ width: '100%', mt:6 }}>
            <Grid className='wrapper' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid className='travel-img img-box' xs={12}  item sm={6} md={3}>
                        <Box className='info'>
                        <img style={{ width:'100%'}} src='https://i.ibb.co/tXSN7S4/doctor.jpg' alt="nature" />
                        <h1>Section 1</h1>
                        </Box>
                        <Box className='desc'>
                            <h1>Detials 1</h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, necessitatibus beatae inventore libero tenetur in quo, debitis, modi eveniet labore eaque qui nam! Architecto, nihil doloribus! </p>

                        </Box>
                    </Grid>
                    <Grid className='travel-img img-box' xs={12}  item sm={6} md={3}>
                        <Box className='info'>
                        <img style={{ width:'100%'}} src='https://i.ibb.co/f91XcBL/hero.jpg' alt="nature" />
                        <h1>Section 1</h1>
                        </Box>
                        <Box className='desc'>
                            <h1>Detials 1</h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, necessitatibus beatae inventore libero tenetur in quo, debitis, modi eveniet labore eaque qui nam! Architecto, nihil doloribus! </p>

                        </Box>
                    </Grid>
                    <Grid className='travel-img img-box' xs={12}  item sm={6} md={3}>
                        <Box className='info'>
                        <img style={{width:'100%'}} src='https://i.ibb.co/Sry3cY1/honda.jpg' alt="nature" />
                        <h1>Section 1</h1>
                        </Box>
                        <Box className='desc'>
                            <h1>Detials 1</h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, necessitatibus beatae inventore libero tenetur in quo, debitis, modi eveniet labore eaque qui nam! Architecto, nihil doloribus! </p>

                        </Box>
                    </Grid>
                    <Grid className='travel-img img-box' xs={12}  item sm={6} md={3}>
                        <Box className='info'>
                        <img style={{width:'100%'}} src='https://i.ibb.co/CH7MZ1T/emajon.jpg' alt="nature" />
                        <h1>Section 1</h1>
                        </Box>
                        <Box className='desc'>
                            <h1>Detials 1</h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, necessitatibus beatae inventore libero tenetur in quo, debitis, modi eveniet labore eaque qui nam! Architecto, nihil doloribus! </p>

                        </Box>
                    </Grid>
                   
                    
            </Grid>
            </Box>
        </Container>
    );
};

export default BasicProjects;