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
        <Container>
            <Typography sx={{color:'#878a8f'}}>
                Simple React, HTML, and CSS Projects 
            </Typography>
            <Typography sx={{color:'#0f141e', fontWeight:"800", letterSpacing:'-.01em'}} variant="h4"  >
                Latest Projects 
            </Typography>

            <Box sx={{ width: '100%' }}>
            <ImageList  sx={{ width:'100%', height:'100%' }} gap={20}>
                        {itemData.map((item) => (
                            <ImageListItem className='img-list' key={item.img}>
                                
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                className='hide-footer'
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    
                                >
                                    <Button  className='custom-btn' sx={{color:'#fff', fontWeight:'700'}}>See Details</Button>
                                </IconButton>
                                }
                            />
                            
                            </ImageListItem>
                        ))}`
                </ImageList>
            </Box>
        </Container>
    );
};

export default BasicProjects;