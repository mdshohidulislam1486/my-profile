import React, { useCallback, useState } from 'react';
import './Navigation.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Container, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';


const Navigation = () => {
  

    const handleCloseMenu=()=>{
        const myBody = document.getElementsByTagName("BODY")[0];
        
        myBody.style.overflow = 'scroll'
        const myNav = document.getElementById('my-nav')
        myNav.style.backgroundColor='rgba(0,0,0,.50)'
        myNav.style.top ='-100vh'
        
    }

    const handleOpenMenu=()=>{
        const myNav = document.getElementById('my-nav')
        const myBody = document.getElementsByTagName("BODY")[0];
        myNav.style.backgroundColor='rgba(0,0,0)'
        myBody.style.overflow = 'hidden'
        myNav.style.zIndex = '2'
        myNav.style.top ='0'
        
    }
   
    
    return (
        
         <Box style={{textAlign:'center'}} sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
             <Box sx={{display:'flex', alignItems:'center', marginLeft:{xs:'1em', sm:'3em'} }}>
                <div><h3 className='round-nav'>S</h3></div>
                <div style={{lineHeight:'2px', marginLeft:'10px'}}>
                    <h3>Md Shohidul Islam</h3>
                    <p style={{fontSize:'.8em'}}> Junior Full Stack Web Developer</p>
                </div>
             </Box>

              <Box  sx={{display:'flex', justifyContent:"center", alignItems:'center'}}>
                
                <nav  id='my-nav' className='my-nav'>
                 <h2 className='home-bac' >Developer</h2>
                 <ul>
                     <li  onClick={handleCloseMenu}><Link className='li-link' to='/home'>Home</Link></li>
                     <li><Link className='li-link' onClick={handleCloseMenu} to="/myprojects">My-Projects</Link></li>
                     <li><a className='li-link'  target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1xyV3Mec1zRegJTJaZv0GWp-3ML5ncky2/view?usp=sharing" alt='ffh'>Resume</a></li>
                     <li><Link className='li-link' onClick={handleCloseMenu} to="/contact">Contact</Link></li>
                     <li><Link className='li-link' to="/home">About</Link></li>
                 </ul>
                 
                 <CancelIcon onClick={()=>handleCloseMenu()}  className='close-menu' ></CancelIcon>
                 
                </nav>
                <Box className="menu-hover" sx={{display:'flex', marginTop:3, marginRight:{xs:'1em', sm:'3em'} }}>
                <small style={{paddingRight:'10px'}}>MENU</small>
                 <DehazeIcon onClick={()=>handleOpenMenu()} className='menu-icon'/>
                </Box>

             </Box>
         </Box>
    );
};

export default Navigation;

// you need to see your nav opiotn position 

