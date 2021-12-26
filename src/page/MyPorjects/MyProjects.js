import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import MyProject from './MyProject';
import Navigation from '../shared/Navigation/Navigation';
import CircularProgress from '@mui/material/CircularProgress';


const MyProjects = () => {
const [projects, setProjects]= useState([])

useEffect(() =>{
    fetch('https://immense-reaches-51418.herokuapp.com/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
}, [])



    return (
        <>
        <Navigation></Navigation>
        <Container>
            <Box sx={{mt:8, display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                { projects
                    ? projects.map(project =><MyProject
                    key={project._id}
                    project={project}
                    ></MyProject>)
                    :
                    <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                  </Box>
                }
                

            </Box>
        </Container>
        </>
    );
};

export default MyProjects;