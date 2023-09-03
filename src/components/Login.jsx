import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div id='login'>
      <div className='logo-info'>
        <img className='fb-logo' src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='fb_logo' />
        <h2>Facebook helps you connect and share with the people in your life.</h2>
      </div>
      <div className='login-outer'>
            <div className='login-container'>
                <form>
                    <center>
                        <input type='text' id='email' name='email' placeholder='Email address or phone number' />
                    </center>
                    <center>
                        <input type='password' id='password' name='password' placeholder='Password' />
                    </center>
                    <center>
                        <button type='submit' className='login-button'>Log In</button>
                    </center>
                    <center>
                        <div className='forgotten'>
                            <a>Forgotten Password?</a>
                        </div>
                    </center>
                    <center>
                        <div className='to-signup'>
                            <Link to='/signup' style={{textDecoration: 'none', color: '#fff'}}>Create New Account</Link>
                        </div>
                    </center>
                </form>
            </div>
            <div className='create-page'>
                <a>Create a Page</a>
                <p>&nbsp;for a celebrity, brand or business.</p>
            </div>
        </div>
    </div>
  )
}

export default Login
