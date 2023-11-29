import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../Hools/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import useAxousPublic from '../Hools/useAxousPublic';


const LoginPage = () => {
    const { UserLogin, UserGoogleLogin } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, seterror] = useState('');
    const navigate = useNavigate();
    const loc = useLocation()
    const from = loc.state?.from?.pathname || "/";
    const {user} = useAuth();
    const axospublic = useAxousPublic()



    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {

        console.log('Email:', email);
        console.log('Password:', password);


        UserLogin(email, password)
            .then((result) => {
                const loggedinUpser = result.user;
                console.log(loggedinUpser)
                  navigate(from, {replace:true})
                // navigate(loc?.state ? loc.state:"/");
            })
            .catch(error => {
                console.log(error.message)
                seterror(error.message)
                return;
            })
    };

    const hendleGoogleLogin = () => {
        UserGoogleLogin()
            .then((result) => {
                console.log(result.user);
                const userinfo = {
                    email: result?.user?.email,
                    name:result?.user?.displayName,
                }
                axospublic.post("/users",userinfo)
                .then(res=>{
                    console.log(res.data)
                    // navigate(loc?.state ? loc.state:"/");
                    navigate(from, {replace:true})
                })          
            })
            .catch(error => {
                seterror(error.message)
            }
            )
    }
    console.log(errors)
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} maxWidth="sm" >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                    justifyContent: 'center',
                    height: '500px',
                }}
            >
                <Typography sx={{ textAlign: 'start' }} variant="h6" gutterBottom>
                    Login
                </Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {
                            width: '300px',
                            marginBottom: '20px',
                        },
                        '& .MuiButton-root': {
                            width: '300px',
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {
                        errors ? <Typography sx={{ textAlign: 'start', color: 'red' }} fontSize="xl" gutterBottom>
                            {errors}
                        </Typography> : " "
                    }
                    <Typography sx={{ textAlign: 'start', }} fontSize="xl" gutterBottom>
                        Create an account  <Link style={{ color: 'green' }} to="/signup">Signup</Link>
                    </Typography>
                    <Button

                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <Button
                        sx={{ marginTop: '10px' }}
                        variant="contained"
                        color="success"
                        onClick={hendleGoogleLogin}
                    >
                        <GoogleIcon sx={{ marginLeft: '5px' }} />
                        Google
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage;
