import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import cctv from '../../../images/projects/cctvDes.png'
import cctvph1 from '../../../images/projects/cctvmobile2.png'
import cctvph2 from '../../../images/projects/ccti8.png'

import backWard1 from '../../../images/projects/backward1.png'
import backWard2 from '../../../images/projects/backward3psd.png'

import './Projects.css'

const Projects = () => {
    return (
       <Box>
            <Container>
                <Grid sx={{justifyContent:'space-around', alignItems:'center'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    <Grid item xs={12} md={6}>
                        <Box className="project-height" sx={{color:'#fff', p:3}}>
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                            <Box>
                            <Typography className='project-text-scale'>
                                2018 - 2019
                            </Typography>
                            <Grid className='project-text-scale'>
                                <Grid item xs={12} md={6}>
                                 <Typography >Basic UX - design resources for InVision Studio</Typography>
                                </Grid>
                            </Grid>
                            </Box>
                            <Box> <Button className='project-button'>View Details -</Button></Box>
                            </Box>
                            <Grid sx={{display:'flex'}}>
                                <Grid item xs={12} >
                                <img style={{marginTop:'10px'}} src={cctv} alt="projPicture" />
                                </Grid>
                                <Grid item xs={12}  sx={{display:'flex', justifyContent:"space-around"}}>
                                <Grid  item xs={6}>
                                    <img sx={{sm:'50px'}} style={{height:'cover', width:"90%", marginTop:'60px'}} src={cctvph2} alt="projPicture" />
                                </Grid>
                                <Grid  item xs={6}>
                                    <img style={{height:'cover', width:"70%", marginTop:'50px'}} src={cctvph1} alt="projPicture" />
                                </Grid>
                                </Grid>
                            </Grid>
                            
                            
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className="project-height" sx={{color:'#fff', p:3}}>
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                            <Box>
                            <Typography className='project-text-scale'>
                                2018 - 2019
                            </Typography>
                            <Grid className='project-text-scale'>
                                <Grid item xs={12} md={6}>
                                 <Typography >Basic UX - design resources for InVision Studio</Typography>
                                </Grid>
                            </Grid>
                            </Box>
                            <Box> <Button className='project-button'>View Details -</Button></Box>
                            </Box>
                            <Grid sx={{display:'flex'}}>
                                <Grid item xs={12} >
                                <img  style={{ marginTop:'15px', position:'relative'}} src={backWard1} alt="projPicture" />
                                </Grid>
                                <Grid item xs={12} >
                                <img  style={{ marginTop:'15px', position:'relative'}} src={backWard2} alt="projPicture" />
                                </Grid>      
                            </Grid>
                            
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className="project-height" sx={{color:'#fff', p:3}}>
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                            <Box>
                            <Typography className='project-text-scale'>
                                2018 - 2019
                            </Typography>
                            <Grid className='project-text-scale'>
                                <Grid item xs={12} md={6}>
                                 <Typography >Basic UX - design resources for InVision Studio</Typography>
                                </Grid>
                            </Grid>
                            </Box>
                            <Box> <Button className='project-button'>View Details -</Button></Box>
                            </Box>
                            <Grid sx={{display:'flex'}}>
                                <Grid item xs={12} >
                                <img style={{marginTop:'10px'}} src={cctv} alt="projPicture" />
                                </Grid>
                                <Grid item xs={12}  sx={{display:'flex', justifyContent:"space-around"}}>
                                <Grid  item xs={6}>
                                    <img sx={{sm:'50px'}} style={{height:'cover', width:"90%", marginTop:'60px'}} src={cctvph2} alt="projPicture" />
                                </Grid>
                                <Grid  item xs={6}>
                                    <img style={{height:'cover', width:"70%", marginTop:'50px'}} src={cctvph1} alt="projPicture" />
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className="project-height" sx={{color:'#fff', p:3}}>
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                            <Box>
                            <Typography className='project-text-scale'>
                                2018 - 2019
                            </Typography>
                            <Grid className='project-text-scale'>
                                <Grid item xs={12} md={6}>
                                 <Typography >Basic UX - design resources for InVision Studio</Typography>
                                </Grid>
                            </Grid>
                            </Box>
                            <Box> <Button className='project-button'>View Details -</Button></Box>
                            </Box>
                            <Grid sx={{display:'flex'}}>
                                <Grid item xs={12} >
                                <img style={{marginTop:'10px'}} src={cctv} alt="projPicture" />
                                </Grid>
                                <Grid item xs={12}  sx={{display:'flex', justifyContent:"space-around"}}>
                                <Grid  item xs={6}>
                                    <img sx={{sm:'50px'}} style={{height:'cover', width:"90%", marginTop:'60px'}} src={cctvph2} alt="projPicture" />
                                </Grid>
                                <Grid  item xs={6}>
                                    <img style={{height:'cover', width:"70%", marginTop:'50px'}} src={cctvph1} alt="projPicture" />
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    
                   
        
            
                </Grid>
            </Container>
       </Box>
    );
};

export default Projects;