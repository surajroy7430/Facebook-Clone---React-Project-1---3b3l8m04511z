import React, { useEffect, useRef, useState } from "react";
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { Games, Group, Home, Mail, MenuOutlined, Notifications, Person, SearchOutlined, Storefront } from "@mui/icons-material";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Switch,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAuth } from "../../utils/AuthStateContext";
import { searchApi } from "../../utils/APIs";
import { toast } from "react-toastify";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar =({ mode, setMode }) => {
  const { user, logout } = useAuth();
  const [tabValue, setTabValue] = useState(0);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const searchInputRef = useRef(null);
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.down('lg'));
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const isSM = useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();

  const headerTabs = [
    {id: 1, icons: <Home />, link: '/', title: 'Home'},
    {id: 2, icons: <Person />, link: '/', title: 'Friends'},
    {id: 3, icons: <Storefront />, link: '/', title: 'Market Place'},
    {id: 4, icons: <Group />, link: '/', title: 'Groups'},
    {id: 5, icons: <Games />, link: '/', title: 'Gaming Zone'},
  ];

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setMode(storedTheme);
    }
  }, []);

  const handleModeChange = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  const handleLogout = () => {
    logout();
  }

  const handleAvatarClick = (event) => {
    setAnchorElUser(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorElUser(null);
  }

  const Search = styled('div')(({ theme }) => ({
        display: 'flex',
        position: 'relative',
        borderRadius: '30px',
        border: '1px solid #979797',
        backgroundColor: alpha(theme.palette.common.white, 1),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.9)
        },
        width: '70%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: '#979797',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            transition: theme.transitions.create('width'),
            width: '70%',
            [theme.breakpoints.up('md')]: {
              width: '20ch',
            },
        },
    }));

    const handleSearch = async () => {
      const searchTerm = searchInputRef.current.value.toLowerCase();
      if(searchTerm) {
          try {
              const searchData = await searchApi(searchTerm, 'field');
              // console.log('searchData', searchData);
              if(searchData.length === 0) {
                  toast.warn('No results found');
              }
              else {
                toast.warn('No Post found');
                // navigate(`/search/?field=${searchTerm}`);
              }
          } catch (error) {
              toast.warn(error);
          }
      }
      else {
          toast.warn('Please enter a search term.');
      }
  }


  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Typography>
            <img 
              src="https://i.ibb.co/72dN4JJ/Facebook-icon-2019-1.png" 
              className="navbar__logo" 
              onClick={() => navigate('/')}
            />
          </Typography>
          <Search>
            <Button onClick={handleSearch}>
                <SearchIconWrapper>
                    <SearchOutlined style={{color: '#979797'}} />
                </SearchIconWrapper>
            </Button>
            <StyledInputBase 
                placeholder='Search Facebook...' 
                inputProps={{ 'aria-label': 'search' }} 
                inputRef={searchInputRef} 
                sx={{color: '#979797'}}
            />
          </Search>
        </div>
        {!isMD && (
          <Tabs 
            value={tabValue} 
            indicatorColor=''
            TabIndicatorProps={{style: {backgroundColor: "white", height: 4}}}
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            {headerTabs.map(tab => (
                <Tab 
                    key={tab.id}
                    LinkComponent={Link} 
                    to={tab.link}
                    label={tab.icons}
                    title={tab.title} 
                    style={{color: 'white'}}
                />
            ))}
          </Tabs>
        )}
        <Icons>
          {/* <Button>
            <Badge >
              <Mail sx={{color: 'white'}} />
            </Badge>
          </Button>
          <Button>
            <Badge >
              <Notifications sx={{color: 'white'}} />
            </Badge>
          </Button> */}
          <Button>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src={user && user.profileImage}
              onClick={handleAvatarClick}
            />
          </Button>
        </Icons>
        <UserBox onClick={handleAvatarClick}>
          <MenuOutlined
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="span"></Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        open={Boolean(anchorElUser)}
        anchorEl={anchorElUser}
        onClose={handleClose}
      >
        <MenuItem>{user && user.name}</MenuItem>
        <MenuItem onClick={() => navigate('/profile')} onClose={handleClose}>My Profile</MenuItem>
        <MenuItem onClick={() => navigate('/')} onClose={handleClose}>Home</MenuItem>
        {/* <MenuItem onClick={() => navigate('/pages')}>My Page</MenuItem> */}
        <MenuItem onClick={handleModeChange}>
          {mode === "light" ? "Dark Mode" : "Light Mode"}
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar;