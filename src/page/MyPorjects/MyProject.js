import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
 
const MyProject = ({project}) => {
    const {name, img1, _id, feature1} = project
 
   
    return (
                <Card sx={{ maxWidth: 345, m:1}} data-aos="zoom-in-right">
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="150"
                        image={img1}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {name}
                        </Typography>
                        <Typography variant="body2" color="#878a8f">
                        {feature1}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link style={{textDecoration:'none', color:"#878a8f"}} to={`/projectdetails/${_id}`}>Learn More</Link></Button>
                    </CardActions>
                </Card>
    );
};

export default MyProject;