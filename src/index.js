import React from 'react';
import '../src/styles/index.css'
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthStateContext } from './utils/AuthStateContext';

const root = createRoot(document.getElementById("root"));
root.render(
    <Router>
        <AuthStateContext>
            <App />
        </AuthStateContext>
    </Router>
);