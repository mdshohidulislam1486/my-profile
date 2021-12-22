import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Box, Grid, Typography, ListItemText } from '@mui/material';
import Navigation from '../shared/Navigation/Navigation';


const ProjectsDetails = () => {
    const navigate = useNavigate()
    const {projectid} = useParams()

    const [myProjects, setMyprojects] = useState()
    const [currentProject, setCurrentProject] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/projects')
        .then(res => res.json())
        .then(data => setMyprojects(data))
    },[])

    useEffect(()=>{
        const newProject = myProjects?.find(myProject=> myProject?._id === projectid)
        setCurrentProject(newProject)
        
    },[myProjects])



    return (

        <Container>
            <Navigation/>
            <Box>
                <Grid container spacing={2} sx={{mt:7, display:'flex', alignItems:'center'}}>
                    <Grid item xs={12} md={6} sx={{justifyContent:'center', display:'flex'}}>
                        <Box sx={{width:'90%', height:'90%', position:'relative'}}>
                        <img style={{position:'relative', width:'100%'}} src={currentProject?.img1} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{justifyContent:'center', display:'flex'}}>
                        <Box sx={{width:'90%', height:'90%', position:'relative'}}>
                            <Typography variant='h5'>
                                Used Teachnology
                            </Typography>
                            <Typography variant='body1'>
                                {currentProject?.usedTeachnology}
                            </Typography>
                        </Box>
                    </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{mt:2, display:'flex', alignItems:'center'}}>
                    
                    <Grid item xs={12} md={6} sx={{justifyContent:'center', display:'flex'}}>
                        <Box sx={{width:'90%', height:'90%', position:'relative'}}>
                            <Typography variant='h5'>
                               Main Features
                            </Typography>
                            <Box>
                            <ListItemText
                                primary="For Users"
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {currentProject?.feature1}
                                    </Typography>
                                    <br/>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {currentProject?.feature2}
                                    </Typography>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {currentProject?.feature3}
                                    </Typography>
                            
                                    </React.Fragment>
                                }
                                />

                            </Box>
                            
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={6} sx={{justifyContent:'center', display:'flex'}}>
                       
                    <Box  sx={{width:'90%', height:'90%', position:'relative'}}>
                         <img style={{position:'relative', width:'100%'}} src={currentProject?.img2} alt="" />
                    </Box>
                
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ProjectsDetails;