import { Grid, Box, Button, id, Typography } from '@mui/material';

import React from 'react';
import { Link } from 'react-router-dom';
import './BasicProject.css'

const BasicProject = ({basicProject}) => {
    const {name, img, description, id } = basicProject

    return (
        <Grid className='travel-img img-box' xs={12}  item sm={6} md={3}>
                        <Link  to={`/projectdetails/${id}`}>
                        <Box className='info'>
                        <img style={{ width:'100%'}} src={img} alt="nature" />
                        <h4>Click for Details</h4>
                        </Box>
                        <Box className='desc'>
                            <Typography sx={{mb:2}} variant='h5' className='dec-h1'>{name}</Typography>
                            <Typography variant='body2'> {description}</Typography>

                        </Box>
                        </Link>
            </Grid>
    );
};

export default BasicProject;