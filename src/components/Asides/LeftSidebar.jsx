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
  
  const LeftSidebar = () => {
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    if(isMD) {
      return null;
    }

    return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={250}>
          <List>
            <ListItem LinkComponent={Link} to="/">
              <ListItemIcon>
                <LocalHospital />
              </ListItemIcon>
              <ListItemText primary="Covid-19 Info" />
            </ListItem>
            <ListItem LinkComponent={Link} to="/">
              <ListItemIcon>
                <Bookmark />
              </ListItemIcon>
              <ListItemText primary="Saved" />
            </ListItem>
            <ListItem LinkComponent={Link} to="/">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItem>
            <ListItem LinkComponent={Link} to="/">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItem>
            <ListItem LinkComponent={Link} to="/">
              <ListItemIcon>
                <Newspaper />
              </ListItemIcon>
              <ListItemText primary="Feeds" />
            </ListItem>
            <ListItem LinkComponent={Link} to="/">
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