import React from 'react';
import './Navigation.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
const Navigation = () => {
    return (

         <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
             <Box sx={{display:'flex', alignItems:'center', marginLeft:{xs:'1em', sm:'3em'} }}>
                <div><h3 className='round-nav'>N</h3></div>
                <div style={{lineHeight:'2px', marginLeft:'10px'}}>
                    <h3>Md Shohidul Islam</h3>
                    <p style={{fontSize:'.8em'}}> Junior Full Stack Web Developer</p>
                </div>
             </Box>

             <Box className='remove-body' sx={{display:'flex', justifyContent:'center', alignItems:'center',  marginRight:{xs:'1em', sm:'3em'}, cursor:"pointer" }}>
                <small>MENU</small>
                <nav style={{overflow:'hidden'}} className="my-nav">
                 <h2 className='home-bg'>Developer</h2>
                 <ul>
                     <li><Link to="/home">Home</Link></li>
                     <li><Link to="/home">Experience</Link></li>
                     <li><Link to="/home">Projects</Link></li>
                     <li><Link to="/home">Contact</Link></li>
                     <li><Link to="/home">About</Link></li>
                 </ul>
                 <CancelIcon className='close-menu'></CancelIcon>
                 
                </nav>
                 <DehazeIcon className='menu-icon'/>

             </Box>
         </Box>
    );
};

export default Navigation;

// you need to see your nav opiotn position 

