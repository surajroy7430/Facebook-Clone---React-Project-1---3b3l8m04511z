import {
    Avatar,
    AvatarGroup,
    Badge,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    styled,
  } 
from "@mui/material";
import React, { useEffect, useState } from "react";
import './Sidebar.css'
import { FetchPosts } from "../../utils/APIs";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
  
const RightSidebar = () => {
    const [users, setUsers] = useState([]);
    const limit = 50;

    useEffect(() => {
      const fetchData = async() => {
        try {
          const usersData = await FetchPosts(limit);

          const filteredUsers = usersData.reduce((accumulator, currentUser) => {
            if (!accumulator[currentUser.author.name]) {
              accumulator[currentUser.author.name] = currentUser;
            }
            return accumulator;
          }, {});

          setUsers(Object.values(filteredUsers));
          // console.log('filteredUsers', filteredUsers);
        } catch (error) {
          console.log("Error: ", error);
        }
      }

      fetchData();
    }, [])
    
    return (
        <Box className="sidebar">
          <Box className='sidebarWrapper'>
            <img src='' alt='' />
            <Typography variant="h5">
              Online friends
            </Typography>
            <List>
            {users && users.slice(8, 15).map((user) => (
              <ListItem key={user.author._id}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  variant="dot"
                >
                  <Avatar src={user.author.profileImage} alt='' />
                </StyledBadge>&nbsp;
                <ListItemText primary={user.author.name} />
              </ListItem>
            ))}
            </List>
          </Box>
        </Box>
    );
  };
  
  export default RightSidebar;