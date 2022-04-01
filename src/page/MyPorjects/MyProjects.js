import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Stack, LinearProgress } from '@mui/material';
import MyProject from './MyProject';
import Navigation from '../shared/Navigation/Navigation';
import AOS from 'aos'
import 'aos/dist/aos.css'


const MyProjects = () => {
const [projects, setProjects]= useState([])


useEffect(() =>{
    fetch('https://immense-reaches-51418.herokuapp.com/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
}, [])

useEffect(()=>{
    AOS.init()
}, [])

    return (
        <>
        <Navigation></Navigation>
        <Container >
            {
                projects.length > 0 ? <Box  sx={{mt:8, display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {
                projects.map(project =><MyProject 
                     key={project._id}
                     project={project}
                     ></MyProject>)
                     }
             </Box>  :
             <Box sx={{justifyContent:'center', alignItems:'center', display:'flex'}}>
             <Stack sx={{ width: '20%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="inherit" />
                <LinearProgress color="success" />
                <LinearProgress color="primary" />
            </Stack>
          </Box>
            }
        </Container>
        </>
    );
};

export default MyProjects;