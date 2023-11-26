import * as React from 'react';
import { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, } from '@mui/material';
import useAuth from '../Hools/useAuth';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { Link } from "react-router-dom"
import useAxousPublic from '../Hools/useAxousPublic';
import Swal from 'sweetalert2';

const SignupPage = () => {
  const { UserSignup,user } = useAuth();
  const navigate = useNavigate();
  const [errors, seterror] = useState('');
  const axospublic = useAxousPublic();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    UserSignup(formData?.email, formData?.password)
      .then((result) => {
        console.log(result.user)
        updateProfile(result.user, {
          displayName: formData.name,
          photoURL: formData.photo,
        })
        .then(()=>{
          //some thing wrong-------------------------->
          const usersinfo = {
              email:formData?.email,
              name:formData.name,
          }
          console.log(usersinfo)
          axospublic.post('/users',usersinfo)
          .then(res=>{
              console.log(res.data)
              if(res.data.acknowledged){
                  Swal.fire({
                      position: 'top-center',
                      icon: 'success',
                      title: 'Your Register Successfully ',
                      showConfirmButton: false,
                      timer: 1500
                    })
                  navigate('/login')
              }
          })
          .catch(error=>{
              console.log(error)
          })
      })
        
      })
      .catch(error => {
        seterror(error.message)
      })

  };

  return (
    <Container maxWidth="sm" style={{ padding: '80px' }}>
      <Typography variant="h4" xs={{ marginTop: "500px" }} align="center" gutterBottom>
        Signup
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="text"
              label="photo"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
      {
        errors ? <Typography sx={{ textAlign: 'start', color: 'red' }} fontSize="xl" gutterBottom>
          {errors}
        </Typography> : " "
      }
      <Typography sx={{ textAlign: 'start', marginTop: '10px' }} fontSize="xl" gutterBottom>
        Create an account  <Link style={{ color: 'green' }} to="/login">Login</Link>
      </Typography>
    </Container>
  );
};

export default SignupPage;
