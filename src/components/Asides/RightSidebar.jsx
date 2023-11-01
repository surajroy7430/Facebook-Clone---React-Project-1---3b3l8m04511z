import {
    Avatar,
    Badge,
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    Typography,
    styled,
    useMediaQuery,
    useTheme,
  } 
from "@mui/material";
import React, { useEffect, useState } from "react";
import './Sidebar.css'
import { FetchPosts } from "../../utils/APIs";
import { Add } from "@mui/icons-material";
import Pages from "../PagesCreation/Pages";

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
    const [isCreatePageModalOpen, setCreatePageModalOpen] = useState(false);
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    const handleCreatePageClick = () => {
      setCreatePageModalOpen(true);
    };

    const handleCloseModal = () => {
      setCreatePageModalOpen(false);
    };

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

    if(isMD) {
      return null;
    }
    
    return (
        <Box className="sidebar">
          <Box className='sidebarWrapper'>
            <Button variant="contained" onClick={handleCreatePageClick} sx={{marginBottom: '20px'}}>
              <Add />&nbsp;
              Create a Page
            </Button>
            {isCreatePageModalOpen && <Pages open={isCreatePageModalOpen} onClose={handleCloseModal} />}
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