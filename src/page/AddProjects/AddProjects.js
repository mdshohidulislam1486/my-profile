import React from 'react';
import {  Box, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import './AddProjects.css'
import axios from 'axios';

const AddProjects = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
      console.log(data)
      axios.post('https://immense-reaches-51418.herokuapp.com/projects', data)
      .then(res =>{
        if(res.data.insertedId){
            alert('New data added successfully')
            reset()
        }
      })
    };
    return (
        <Box className='add-project' sx={{textAlign:'center'}}>
            <Typography variant='h4'>Add a Service</Typography>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <input required placeholder='Name' {...register("name")} />
                <input required placeholder='description' {...register("description" )} />
                <input placeholder='Feature1' {...register("feature1" )} />
                <input placeholder='Feature2' {...register("feature2" )} />
                <input placeholder='Feature3' {...register("feature3" )} />
                <input placeholder='Used Teachnology' {...register("usedTeachnology" )} />
                <input required placeholder='Client Site Link' {...register("client" )} />
                <input placeholder='Server Site Link' {...register("server" )} />
                <input required placeholder='Live site Link' {...register("live" )} />
                <input placeholder='Img ' required {...register("img1" )} />
                <input placeholder='More Img Link' {...register("img2" )} />
                <input placeholder='name' type="submit" />
            </form>
        </Box>
    );
};

export default AddProjects;