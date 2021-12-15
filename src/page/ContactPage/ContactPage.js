
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../../page/shared/Navigation/Navigation'
import './Contact.css'
import emailjs from 'emailjs-com';
import { useRef } from 'react';





const ContactPage = () => {

    const form = useRef();

    function sendEmail(e) {

        e.preventDefault();

    emailjs.sendForm('service_golip38', 'template_gyhwkxu', form.current, 'user_Lak3Y6ja2ORL29oilHCZ9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
        
    }
    
    return (
        <Box id='overflow-hidden'>
            <Navigation></Navigation>
            <Box>
                <p>
                <iframe className='google-map' title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.460570067908!2d90.36375578037081!3d23.778913803203544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b0f09aac43%3A0xf86561e78ef39ed9!2sAgargaon%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1638552632814!5m2!1sen!2sbd" style={{border:0, allowfullscreen:"", loading:"lazy"}}></iframe>
                </p>
                <Container>
                    <Box sx={{ flexGrow: 1, mt:7}}>
                        <Grid container spacing={15}>
                            <Grid item xs={12} md={4}>
                            <Typography variant="overline" sx={{letterSpacing:'0.3em', color:'#878a8f'}}>CONTACT</Typography>
                                <Box>
                                    <Typography variant='h4' sx={{color:'0f141e', fontWeight:800}}>
                                        Let's work  — <br/> and  grow together 
                                    </Typography>
                                    <Typography variant="overline" sx={{letterSpacing:'0.3em', color:'#878a8f'}}>
                                        Address
                                    </Typography>
                                    <Typography variant="body2"  sx={{color:'#878a8f'}}>
                                        599, Rokeya Soroni<br/>West Kafrul <br/>Dhaka-1216, Bangladesh
                                    </Typography>
                                </Box>
                        
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography sx={{my:3, color:'#878a8f'}}>
                                Got a project? Drop me a line if you want to work together on something exciting. Big or small. Mobile or web.
                                </Typography>
                                <form ref={form} onSubmit={sendEmail}>
                                    <TextField sx={{mr:2}} id="standard-basic" type="text" name="user_name"  label="Name" variant="standard" />
                                    <TextField  id="standard-basic" type="email" name="user_email"  label="Email" variant="standard" />
                                    <br/>
                                    <TextField
                                    id="standard-multiline-static"
                                    label="Your Message"
                                    multiline
                                    rows={6}
                                    sx={{length:'100%'}}
                                    variant="standard"
                                    name="message"
                                    />
                                    <br/>
                                    <br/>
                                    <Button type="submit" sx={{py:'.1em'}} variant='contained' color='secondary'>Send your message</Button>
                                </form>      
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

            </Box>
        </Box>
    );
};

export default ContactPage;