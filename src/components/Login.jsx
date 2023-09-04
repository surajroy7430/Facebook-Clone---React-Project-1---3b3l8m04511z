import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {

    
  return (
    <div id='main'>
        <div id='login'>
            <div className='logo-info'>
                <div className='fb-logo'>
                    <img className='logo' 
                        src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' 
                        alt='fb_logo' 
                    />
                </div>
                <h2>
                    Facebook helps you connect and share with the people in your life.
                </h2>
            </div>
            <div className='login-outer'>
                <div className='login-container'>
                    <form>
                        <div className='input-field'>
                            <input 
                                type='text' 
                                id='email' 
                                name='email' 
                                placeholder='Email address or phone number' 
                            />
                        </div>
                        <div className='input-field'>
                            <input 
                                type='password' 
                                id='password' 
                                name='password' 
                                placeholder='Password' 
                            />
                        </div>
                        <div className='submit-button'>
                            <button 
                                type='submit' 
                                className='login-button'>Log In
                            </button>
                        </div>
                        <div className='forgotten'>
                            <a>Forgotten Password?</a>
                        </div>
                        <div className='bottom-line'></div>
                        <div className='to-signup'>
                            <Link className='signup-button' to='/signup'>
                                Create New Account
                            </Link>
                        </div>
                    </form>
                </div>
                <div className='create-page'>
                    <a>Create a Page</a>
                    &nbsp;for a celebrity, brand or business.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
