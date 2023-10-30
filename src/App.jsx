import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css'
import HomePage from './HomePage/HomePage';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Forgot from './components/Authentication/Forgot';
import { useAuth } from './utils/AuthStateContext';
import Profile from './components/ProfilePage/Profile';

const App = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an asynchronous authentication check
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  if (isLoading) {
    return <small>.</small>
  }
  return (
    <div id="main">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/' element={user ? <HomePage /> : <Navigate to='/login' />} />
          <Route path='/profile' element={user ? <Profile /> : <Navigate to='/login' />} />
        </Routes>
    </div>
  )
}

export default App;
