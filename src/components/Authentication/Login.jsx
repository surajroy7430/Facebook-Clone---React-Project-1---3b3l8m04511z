import React, { useState } from 'react'
import './styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardContent, TextField, Button, Container, Typography, Grid, Divider, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from '../../utils/AuthStateContext';
import { loginAuth } from '../../utils/APIs';

const Login = () => {
  const { loginUser } = useAuth();
  const [userInfo, setUserInfo] = useState({
      email: '', 
      password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ 
        ...userInfo, 
        [name]: value 
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formData = await loginAuth(userInfo);
      loginUser(formData);

      navigate('/');

    } catch (error) {
        console.error(error);
    }
  }
  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
    
  return (
    <div className="login-container">
        <div className="login-content">
          <img
            className="logo"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="facebook_logo"
          />
        </div>
        <Card elevation={4} className="login-card">
        <CardContent>
          <Typography className="subtitle">
            Log in to Facebook
          </Typography>
          <form className="form" onSubmit={handleLogin}>
          <FormControl fullWidth required variant="outlined" margin="normal">
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="email"
                value={userInfo.email}
                onChange={handleInputChange}
                fullWidth
                disableUnderline
                style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '10px' }}
              />
            </FormControl>
            <FormControl fullWidth required variant='outlined' margin="normal">
              <Input 
                id='password' 
                name='password' 
                placeholder='Password'
                autoComplete="off"
                value={userInfo.password}
                onChange={handleInputChange}
                disableUnderline
                style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '10px' }}
                type={showPassword ? 'text' : 'password'} 
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                }
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="login-button"
              style={{boxShadow: 'none'}}
            >
              Log In
            </Button>
          </form>
          <Grid container justifyContent="center" className='forgotten'>
            <Grid item className='forgotten'>
              <Link to='/forgot'>Forgotten Password?</Link>
            </Grid>
          </Grid>
          
          <Divider>OR</Divider>

          <Grid container justifyContent="center" className='to-signup'>
            <Grid>
              <Link to='/signup'>
                Create New Account
              </Link>
            </Grid>
          </Grid>
      </CardContent>
      </Card>
    </div>
  )
}

export default Login
