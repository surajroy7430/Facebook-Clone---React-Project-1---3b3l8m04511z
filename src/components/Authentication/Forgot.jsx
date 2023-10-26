import { AppBar, Box, Button, Card, CardContent, Divider, FormControl, Grid, Input, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import './styles/Forgot.css'
import { Link } from 'react-router-dom'
import { ReactComponent as FacebookSVG } from '../../assets/facebookSVG.svg'

const Forgot = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
    }

  return (
    <Box>
        <AppBar
            position='fixed' 
            style={{
                zIndex: '1', 
                backgroundColor: 'white',
            }}
        >
            <Toolbar className='forgotToolbar' disableGutters>
                <Link className='facebookLogo'>
                    <FacebookSVG /> 
                </Link>
                <form onSubmit={handleLogin} className='forgotForm'>
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
                          style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '5px' }}
                        />
                    </FormControl>
                    <FormControl fullWidth required variant="outlined" margin="normal">
                        <Input
                          id="password"
                          type="password"
                          placeholder="Password"
                          autoComplete="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          fullWidth
                          disableUnderline
                          style={{ border: '1px solid #ced4da', borderRadius: '4px', padding: '5px' }}
                        />
                    </FormControl>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className="submit-button"
                      style={{boxShadow: 'none'}}
                    >
                      Log In
                    </Button>
                    <Grid container justifyContent="center" className='forgotten'>
                      <Grid item className='forgotten'>
                        <Link to='/forgot' target='_blank'>Forgotten Password?</Link>
                      </Grid>
                    </Grid>
                </form>
            </Toolbar>
        </AppBar>
        <Card style={{marginTop: '250px'}} elevation={4} className="forgot-card">
            <CardContent>
                <Typography variant="h5" style={{textAlign: 'left', fontWeight: 'bold'}}>
                    Find Your Account
                </Typography>
                <Divider className='forgot_divider' />
                <Typography variant="subtitle1" style={{textAlign: 'left'}}>	
                    Please enter your email address or mobile number to search for your account.
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
                </form>
                <Divider className='forgot_divider' />
                <div style={{textAlign: 'right'}}>
                    <Button 
                        variant='contained' 
                        style={{
                            backgroundColor: '#e4e6eb', 
                            color: 'black', 
                            boxShadow: 'none',
                            fontWeight: 'bold',
                            marginRight: '8px'
                        }}
                    >Cancel</Button>
                    <Button 
                        variant='contained'
                        style={{
                            boxShadow: 'none',
                        }}
                    >Search</Button>
                </div>
            </CardContent>
        </Card>
    </Box>
  )
}

export default Forgot
