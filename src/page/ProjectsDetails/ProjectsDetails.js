import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Box, Grid, Typography, ListItemText, Button } from '@mui/material';
import Navigation from '../shared/Navigation/Navigation';
import './ProjectDetails.css'


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
        <><Navigation/>
        <Container>
            <Box sx={{margin:'3em 2em', display:'flex', justifyContent:{xs:'center', sm:'space-between'}, alignItems:'center', flexDirection:{xs:'column', sm:'row'}}}>
            <Button sx={{textDecoration:'none'}}><Link style={{textDecoration:'none', fontWeight:600}} to='/myprojects'>Back to Porjects page</Link>
            </Button>
            <Typography>
                {currentProject?.name}
            </Typography>
            </Box>

            <Box sx={{mb:5}}>
                <Grid container spacing={2} sx={{display:'flex',  alignItems:'center'}}>
                    <Grid item xs={12} md={6} sx={{justifyContent:'center', display:'flex'}} order={{xs:2, sm:2, md: 1 }}>
                        <Box sx={{width:'90%', height:'90%', position:'relative'}}>
                        <img style={{position:'relative', width:'100%'}} src={currentProject?.img1} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{justifyContent:'center', display:'flex'}} order={{ xs:1, sm:1, md: 2 }}>
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
            <Box sx={{textAlign:'center'}}>
            <Typography variant='h6' sx={{fontWeight:'800', my:5}}>
                Please check the relevant link 
            </Typography>
            <Box className='code-link' sx={{display:'flex', justifyContent:'space-between', flexDirection:{xs:'column', sm:'row', lineHeight:'2em'}}}>
                <a href={currentProject?.live} target='_blank' rel="noreferrer" alt='lievLink'>Live Site</a>
                <a href={currentProject?.client} target='_blank' rel="noreferrer" alt='lievLink'>Client Site Code</a>
                <a href={currentProject?.server} target='_blank' rel="noreferrer" alt='lievLink'>Server Site Code</a>
            </Box>
            </Box>
        </Container>
        </>
    );
};

export default ProjectsDetails;