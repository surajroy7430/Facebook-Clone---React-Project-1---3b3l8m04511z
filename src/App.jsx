import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css'
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './utils/AuthStateContext';
import HomePage from './HomePage/HomePage';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Profile from './components/ProfilePage/Profile';
import SearchResults from './components/Asides/SearchResults';
import UsersProfile from './components/ProfilePage/UsersProfile';
// import PageData from './components/PagesCreation/PageData';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer autoClose={1000} />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/search' element={<SearchResults />} />
          <Route path='/' element={user ? <HomePage /> : <Navigate to='/login' />} />
          <Route path='/profile' element={user ? <Profile /> : <Navigate to='/login' />} />
          <Route path='/user/:id' element={user ? <UsersProfile /> : <Navigate to='/login' />} />
          {/* <Route path='/pages' element={user ? <PageData /> : <Navigate to='/login' />} /> */}
        </Routes>
    </div>
  )
}

export default App;
