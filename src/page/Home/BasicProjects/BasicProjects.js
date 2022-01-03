import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import React from 'react';
import './BasicProject.css'
import BasicProject from './BasicProject';

const basisProjects =[
    {
        name:'Simple Educational Website', 
        description:'This is a simple educational website with with react nor server site data are loded from Custom Jason file',
        id:'61bf7e7d711d7377b4ef1677',
        img:'https://i.ibb.co/tXSN7S4/doctor.jpg'
    },
    {
        name:'Hiring Celebrities', 
        description:'This webstie is made of raw JavaScript with simple feature of adding invition cost by clicking invit button',
        id:'61bf7e7d711d7377b4ef1677',
        img:'https://i.ibb.co/f91XcBL/hero.jpg'
    },
    {
        name:'Online Bike Shop', 
        description:'Top-Honda collection made of bootstrap and use of custom css no Javascript Framework used here',
        id:'61bf7e7d711d7377b4ef1677',
        img:'https://i.ibb.co/Sry3cY1/honda.jpg'
    },
    {
        name:'Emazon E-commerce Site', 
        description:'Emazon is made of react and have a lot of features from real E-commarce website',
        id:'61bf7e7d711d7377b4ef1677',
        img:'https://i.ibb.co/CH7MZ1T/emajon.jpg'
    },
]



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
            <Grid className='wrapper' container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 1 }}>
                     {
                       basisProjects.map(basicProject => <BasicProject
                       key={basicProject.name}
                       basicProject={basicProject}
                       ></BasicProject>)  
                     }
                   
                    </Grid>
                   
             </Box>
        </Container>
    );
};

export default BasicProjects;