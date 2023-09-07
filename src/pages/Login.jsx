import React, { useState } from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'
// import { login } from '../authService'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
    }
    
  return (
    <div id='login-main'>
        <div id='login'>
            <div className='logo-info'>
                <div className='fb-logo'>
                    <img className='logo' 
                        src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' 
                        alt='facebook_logo' 
                    />
                </div>
                <h2>
                    Facebook helps you connect and share with the people in your life.
                </h2>
            </div>
            <div className='login-outer'>
                <div className='login-container'>
                    <form>
                        <div className='login-field'>
                            <input 
                                type='email' 
                                id='email' 
                                name='email' 
                                placeholder='Email address' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='login-field'>
                            <input 
                                type='password' 
                                id='password' 
                                name='password' 
                                placeholder='Password'           
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='submit-button'>
                            <button 
                                type='submit' 
                                className='login-button' 
                                onClick={handleLogin}
                            >Log In
                            </button>
                        </div>
                        <div className='forgotten'>
                            <a>Forgotten Password?</a>
                        </div>
                        <div className='bottom-line'></div>
                        <div className='to-signup'>
                            <Link to='/signup'>
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
