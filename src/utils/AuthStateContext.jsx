import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthStateContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const authToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('userInfo');

    const navigate = useNavigate();

    // Check if the user is already logged in on component mount
    useEffect(() => {
        if (authToken && storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                setIsLoggedIn(true);
            } catch (error) {
                localStorage.removeItem('userInfo');
                setIsLoggedIn(false);
                console.error(error);
            }
            
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const loginUser = (userdata) => {
        setUser(userdata.data);
        setIsLoggedIn(true);

        // Store the authentication token and user info in localStorage
        localStorage.setItem('authToken', userdata.token);
        localStorage.setItem('userInfo', JSON.stringify(userdata.data));
    }
    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);

        // Remove the authentication token and user info from localStorage
        localStorage.removeItem('authToken');
        localStorage.removeItem('userInfo');
        navigate('/login');
    }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, loginUser, logout, }}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    // Use the useContext hook to access the AuthContext value
    const context = useContext(AuthContext);

    // Throw an error if the hook is used outside of the AuthProvider
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}
