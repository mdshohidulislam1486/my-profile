import React, { useCallback, useState } from 'react';
import './Navigation.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Container, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';









const Navigation = () => {
  

    const handleCloseMenu=()=>{

        const myNav = document.getElementById('my-nav')
        myNav.style.top ='-100vh'
        console.log('closed')
    }
    const handleOpenMenu=()=>{
        const myNav = document.getElementById('my-nav')
        myNav.style.top ='0'
        console.log('closed')
    }
   
    
    const handleRelode = ()=>{
        window.location.reload()
    }

    return (

         <Box style={{textAlign:'center'}} sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
             <Box sx={{display:'flex', alignItems:'center', marginLeft:{xs:'1em', sm:'3em'} }}>
                <div><h3 className='round-nav'>N</h3></div>
                <div style={{lineHeight:'2px', marginLeft:'10px'}}>
                    <h3>Md Shohidul Islam</h3>
                    <p style={{fontSize:'.8em'}}> Junior Full Stack Web Developer</p>
                </div>
             </Box>

              <Box  sx={{display:'flex', justifyContent:"center", alignItems:'center'}}>
                
                <nav  id='my-nav' className='my-nav'>
                 <h2 className='home-bac' >Developer</h2>
                 <ul>
                     <li  onClick={handleRelode}><Link  to='/home'>Home</Link></li>
                     <li><Link to="/home">Experience</Link></li>
                     <li><a  target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1xyV3Mec1zRegJTJaZv0GWp-3ML5ncky2/view?usp=sharing" alt='ffh'>Resume</a></li>
                     <li><Link to="/contact">Contact</Link></li>
                     <li><Link to="/home">About</Link></li>
                 </ul>
                 
                 <CancelIcon onClick={()=>handleCloseMenu()}  className='close-menu' ></CancelIcon>
                 
                </nav>
                <Box className="menu-hover" sx={{display:'flex', marginTop:3, marginRight:{xs:'1em', sm:'3em'} }}>
                <small style={{paddingRight:'10px'}}>MENU</small>
                 <DehazeIcon onClick={handleOpenMenu} className='menu-icon'/>
                </Box>

             </Box>
         </Box>
    );
};

export default Navigation;

// you need to see your nav opiotn position 

