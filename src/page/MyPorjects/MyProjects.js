import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import MyProject from './MyProject';
import Navigation from '../shared/Navigation/Navigation';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

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
                    <Box sx={{justifyContent:'center', alignItems:'center', display:'flex'}}>
                        <Stack sx={{ width: '70%', color: 'grey.500' }} spacing={2}>
                            <LinearProgress color="inherit" />
                            <LinearProgress color="success" />
                            <LinearProgress color="primary" />
                        </Stack>
                    </Box>
                }
                

            </Box>
        </Container>
        </>
    );
};

export default MyProjects;