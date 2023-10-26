import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
// import {ReactComponent as SearchIcon} from '../assets/searchicon.svg'
// import {ReactComponent as BackIcon} from '../assets/arrowback.svg'
// import {ReactComponent as HomeIcon} from '../assets/home.svg'
// import {ReactComponent as FriendsIcon} from '../assets/friends.svg'
// import {ReactComponent as GameIcon} from '../assets/game.svg'
// import {ReactComponent as MarketIcon} from '../assets/market.svg'
// import {ReactComponent as GroupsIcon} from '../assets/groups.svg'
// import {ReactComponent as MenuIcon} from '../assets/menu.svg'
// import {ReactComponent as MessengerIcon} from '../assets/messenger.svg'
// import {ReactComponent as NotificationsIcon} from '../assets/notifications.svg'
// import {ReactComponent as DefaultProfile} from '../assets/profile.svg'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
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

const Navbar =() => {
  const [open, setOpen] = useState(false);
  // const [notificationsOpen, setNotificationsOpen] = useState(false);
  // const [profileDown, setProfileDown] = useState(false);
  // const [users, setUsers] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [filteredUsers, setFilteredUsers] = useState([]);

  // const renderNotifications = () => {
  //   if (notificationsOpen) {
  //     setNotificationsOpen(false)
  //     document.getElementsByClassName('dropdown-content2')[0].classList.remove('block')
  //   } else {
  //     setNotificationsOpen(true)
  //     setProfileDown(false)
  //     document.getElementsByClassName('dropdown-content')[0].classList.remove('block');
  //     document.getElementsByClassName('dropdown-content2')[0].classList.add('block');
  //   }
  // }

  // const renderProfile = () => {
  //   if (profileDown) {
  //     setProfileDown(false)
  //     document.getElementsByClassName('dropdown-content')[0].classList.remove('block');
  //   } else {
  //     setProfileDown(true);
  //     setNotificationsOpen(false)
  //     document.getElementsByClassName('dropdown-content2')[0].classList.remove('block');
  //     document.getElementsByClassName('dropdown-content')[0].classList.add('block');
  //   }
  // }

  // const collapseNavbar = () => {
  //   document.getElementsByClassName('navbar__logo')[0].style.display = 'block';
  //   document.getElementsByClassName('navbar__searchBack')[0].style.display = 'none';
  //   document.getElementsByClassName('searchBox')[0].style.display = 'none';
  //   document.getElementsByClassName('navbar__search')[0].style.display = 'block';
  //   document.getElementsByClassName('dropdown-content3')[0].style.display = 'none';
  //   document.getElementsByClassName('searchBox')[0].value = ""
  // }

  // const expandNavbar = () => {
  //   document.getElementsByClassName('navbar__logo')[0].style.display = 'none';
  //   document.getElementsByClassName('navbar__searchBack')[0].style.display = 'block';
  //   document.getElementsByClassName('navbar__search')[0].style.display = 'none';
  //   document.getElementsByClassName('searchBox')[0].style.display = 'block';
  // }

  // const updateSearchResults = (e) => {
  //   setSearchTerm(e.target.value)
  //   document.getElementsByClassName('dropdown-content3')[0].style.display = 'block';
  // }


  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge >
            <Mail />
          </Badge>
          <Badge >
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src=""
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src=""
          />
          <Typography variant="span"></Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
    // <div id="navbar">
    //   <div className="navbar-LogoAndSearch">
    //     <Link to="/">
    //       <img src="https://i.ibb.co/72dN4JJ/Facebook-icon-2019-1.png" className="navbar__logo" />
    //     </Link>
    //     <div className="navbar__searchBack" onClick={collapseNavbar}>
    //       <BackIcon className="searchBackIcon" />
    //     </div>
    //     <div className="navbar__search" onClick={expandNavbar}>
    //       <SearchIcon className="searchIcon" />
    //     </div>
    //     <input type="search" className="searchBox" placeholder="Search Facebook" value='' onChange={updateSearchResults} />
    //     <div className="dropdown-content3">
    //       <ul id="list">
            
    //       </ul>
    //     </div>
    //   </div>

    //   <div className="navbar__pages">
    //     <div className="home">
    //       <Link to="/"><HomeIcon title="Home" /></Link>
    //     </div>
    //     <div className="friends">
    //       <FriendsIcon title="Friends" />
    //     </div>
    //     <div className="market">
    //       <MarketIcon title="MarketPlace" />
    //     </div>
    //     <div className="groups">
    //       <GroupsIcon title="Groups" />
    //     </div>
    //     <div className="gaming">
    //       <GameIcon title='Gaming'/>
    //     </div>
    //   </div>

    //   <div className="navbar__otherIcons">
    //     <div className="round">
    //       <MenuIcon className='addIcon' title="Menu" />
    //     </div>

    //     <div className="round">
    //       <MessengerIcon className="messengerIcon" title="Messenger" />
    //     </div>

    //     <div className="round" onClick={renderNotifications}>
    //       <NotificationsIcon className={`notificationsIcon ${notificationsOpen && "blue"}`} title="Notifications" />
    //     </div>
    //     <div className="dropdown-content2">
    //       <h1>Notifications</h1>
    //     </div>
    //     <div className="round" onClick={renderProfile}>
    //       <DefaultProfile className={`dropdownIcon ${profileDown === true}`} title="Account" />
    //       <div className="dropdown-content">
    //         <Link to="#">
    //           <div className="optionDrop">
    //             <img src="https://i.ibb.co/1zmBtwr/84241059-189132118950875-4138507100605120512-n.jpg" alt="profile" className="Avatar" />
    //             <div className="sideinfoDropAvatar">
    //               <p>See your profile</p>
    //             </div>
    //           </div>
    //         </Link>
    //         <div className="hr" />
            
    //         <div/>
    //         <Link to="#">
    //           <div className="optionDrop">
    //             <div className="iconDrop">
    //               <i className="settings" />
    //             </div>
    //             <h1>Settings & Privacy</h1>
    //           </div>
    //         </Link>
    //         <Link to="#">
    //           <div className="optionDrop">
    //             <div className="iconDrop">
    //               <i className="darkMode" />
    //             </div>
    //             <h1>Dark Mode</h1>
    //           </div>
    //         </Link>
    //         <Link to="#">
    //           <div className="optionDrop">
    //             <div className="iconDrop">
    //               <i className="logout" />
    //             </div>
    //             <h1>Log out</h1>
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div >
  )
}

export default Navbar;