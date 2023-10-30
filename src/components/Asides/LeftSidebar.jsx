import {
    Bookmark,
    EventSharp,
    ExpandMore,
    Group,
    LocalHospital,
    ModeNight,
    Newspaper,
    Storefront,
} from "@mui/icons-material";
import {
  Avatar,
    Box,
    Button,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Switch,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/AuthStateContext";
import { FetchPosts } from "../../utils/APIs";
  
const LeftSidebar = () => {
  const { user } = useAuth();
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
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

  if(isMD) {
    return null;
  }

  return (
      <Box className="sidebar">
        <Box className="sidebarWrapper">
          <List>
            <ListItem components={Link} to="/">
              <ListItemIcon>
                <Avatar src={user && user.profileImage} />
              </ListItemIcon>
              <ListItemText primary={user && user.name} />
            </ListItem>
            <ListItem components={Link} to="/">
              <ListItemIcon>
                <LocalHospital />
              </ListItemIcon>
              <ListItemText primary="Covid-19 Info" />
            </ListItem>
            <ListItem components={Link} to="/">
              <ListItemIcon>
                <Bookmark />
              </ListItemIcon>
              <ListItemText primary="Saved" />
            </ListItem>
            <ListItem components={Link} to="/">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItem>
            <ListItem components={Link} to="/">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItem>
            <ListItem components={Link} to="/">
              <ListItemIcon>
                <Newspaper />
              </ListItemIcon>
              <ListItemText primary="Feeds" />
            </ListItem>
            <ListItem components={Link} to="/">
              <ListItemIcon>
                <EventSharp />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItem>
          </List>
          <Button sx={{color: 'black'}}>
            <ExpandMore />
            See More
          </Button>
          <Divider />
          <List>
            {users && users.map((user) => (
              <ListItem key={user.author._id}>
                <Avatar src={user.author.profileImage} alt='' />&nbsp;
                <ListItemText primary={user.author.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    );
  };
  
  export default LeftSidebar;