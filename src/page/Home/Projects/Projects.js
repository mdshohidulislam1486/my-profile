import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Projects = () => {
    return (
       <Box>
            <Container>
                <Grid sx={{justifyContent:'space-around', alignItems:'center'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    
                    <Grid item xs={12} md={6}>
                        <Box  sx={{color:'#fff', height:'20rem', backgroundColor:'rgba(0, 0, 0, .9)'}}>
                            <Typography>
                                2018 - 2019
                            </Typography>
                            <Typography>Basic UX - design resources for InVision Studio</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{color:'#fff', height:'20rem', backgroundColor:'rgba(0, 0, 0, .9)'}}>
                            <Typography>
                                2018 - 2019
                            </Typography>
                            <Typography>Basic UX - design resources for InVision Studio</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{color:'#fff', height:'20rem', backgroundColor:'rgba(0, 0, 0, .9)'}}>
                            <Typography>
                                2018 - 2019
                            </Typography>
                            <Typography>Basic UX - design resources for InVision Studio</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{color:'#fff', height:'20rem', backgroundColor:'rgba(0, 0, 0, .9)'}}>
                            <Typography>
                                2018 - 2019
                            </Typography>
                            <Typography>Basic UX - design resources for InVision Studio</Typography>
                        </Box>
                    </Grid>
                    
            
                </Grid>
            </Container>
       </Box>
    );
};

export default Projects;