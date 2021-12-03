
import { Container, Grid, TextField, Typography } from '@mui/material';
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
        <Box>
            <Navigation></Navigation>
            <Box>
                <p>
                <iframe className='google-map' title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.460570067908!2d90.36375578037081!3d23.778913803203544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b0f09aac43%3A0xf86561e78ef39ed9!2sAgargaon%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1638552632814!5m2!1sen!2sbd" style={{border:0, allowfullscreen:"", loading:"lazy"}}></iframe>
                </p>
                <Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{my:3}}>
                                    <Typography>CONTACT</Typography>
                                    <Typography variant='h5' sx={{fontWeight:600}}>
                                        Let's work --- and <br/> gorow together 
                                    </Typography>
                                    <Typography>
                                        Address
                                    </Typography>
                                    <Typography>
                                        599, Rokeya Soroni<br/>West Kafrul <br/>Dhaka-1216, Bangladesh
                                    </Typography>
                                </Box>
                        
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography sx={{my:3}}>
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
                                    rows={4}
        
                                    variant="standard"
                                    name="message"
                                    />
                                    <br/>
                                    <input type="submit" value="Send your message" />
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