import React from 'react'
import '../styles/SidebarRow2.css';
import { Avatar } from '@mui/material';

const SidebarRow2 = ({ ImageURL, title }) => {
    return (
        <div className="sidebar2Row">
            <Avatar className="avatar" src={ImageURL} alt={title} />
            <h1>{title}</h1>
        </div>
    )
}

export default SidebarRow2