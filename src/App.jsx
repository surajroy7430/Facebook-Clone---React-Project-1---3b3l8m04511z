import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css'
import HomePage from './HomePage/HomePage';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Forgot from './components/Authentication/Forgot';

const App = () => {

  return (
    <div id="main">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot' element={<Forgot />} />
        </Routes>
    </div>
  )
}

export default App;
