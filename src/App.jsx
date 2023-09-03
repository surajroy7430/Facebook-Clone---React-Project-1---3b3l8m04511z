import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Login from './components/Login';
import SignUp from './components/SignUp';


const App = () => {
  return (
    <div id="main">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
