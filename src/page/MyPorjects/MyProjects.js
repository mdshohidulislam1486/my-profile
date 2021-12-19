import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import MyProject from './MyProject';

const MyProjects = () => {
const [projects, setProjects]= useState([])

useEffect(() =>{
    fetch('http://localhost:5000/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
}, [])



    return (
        <Container>
            <Box sx={{mt:8, display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                
                {
                    projects.map(project =><MyProject
                    key={project._id}
                    project={project}
                    ></MyProject>)
                }
                

            </Box>
        </Container>
    );
};

export default MyProjects;