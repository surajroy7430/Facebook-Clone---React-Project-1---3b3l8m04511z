import React, { useState } from 'react'
import './styles/Login.css'
import { Link } from 'react-router-dom'
import { Card, CardContent, TextField, Button, Container, Typography, Grid, Divider, FormControl, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
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
                placeholder="Email Address"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
