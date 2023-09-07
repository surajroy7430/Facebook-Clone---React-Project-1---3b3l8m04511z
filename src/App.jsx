import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <div id="main">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
