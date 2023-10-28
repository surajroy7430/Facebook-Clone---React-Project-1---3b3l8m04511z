import {
    Bookmark,
    EventSharp,
    Group,
    LocalHospital,
    ModeNight,
    Newspaper,
    Storefront,
} from "@mui/icons-material";
import {
  Avatar,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Switch,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/AuthStateContext";
  
const LeftSidebar = () => {
  const { user } = useAuth();
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  if(isMD) {
    return null;
  }

  return (
      <Box flex={1} p={2}>
        <Box position="fixed" width={250}>
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
        </Box>
      </Box>
    );
  };
  
  export default LeftSidebar;