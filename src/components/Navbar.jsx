import React, { useEffect, useState } from "react";
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
import {ReactComponent as SearchIcon} from '../assets/searchicon.svg'
import {ReactComponent as BackIcon} from '../assets/arrowback.svg'
import {ReactComponent as HomeIcon} from '../assets/home.svg'
import {ReactComponent as FriendsIcon} from '../assets/friends.svg'
import {ReactComponent as GameIcon} from '../assets/game.svg'
import {ReactComponent as MarketIcon} from '../assets/market.svg'
import {ReactComponent as GroupsIcon} from '../assets/groups.svg'
import {ReactComponent as MenuIcon} from '../assets/menu.svg'
import {ReactComponent as MessengerIcon} from '../assets/messenger.svg'
import {ReactComponent as NotificationsIcon} from '../assets/notifications.svg'
import {ReactComponent as DefaultProfile} from '../assets/profile.svg'


const Header =() => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileDown, setProfileDown] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const renderNotifications = () => {
    if (notificationsOpen) {
      setNotificationsOpen(false)
      document.getElementsByClassName('dropdown-content2')[0].classList.remove('block')
    } else {
      setNotificationsOpen(true)
      setProfileDown(false)
      document.getElementsByClassName('dropdown-content')[0].classList.remove('block');
      document.getElementsByClassName('dropdown-content2')[0].classList.add('block');
    }
  }

  const renderProfile = () => {
    if (profileDown) {
      setProfileDown(false)
      document.getElementsByClassName('dropdown-content')[0].classList.remove('block');
    } else {
      setProfileDown(true);
      setNotificationsOpen(false)
      document.getElementsByClassName('dropdown-content2')[0].classList.remove('block');
      document.getElementsByClassName('dropdown-content')[0].classList.add('block');
    }
  }

  const collapseNavbar = () => {
    document.getElementsByClassName('navbar__logo')[0].style.display = 'block';
    document.getElementsByClassName('navbar__searchBack')[0].style.display = 'none';
    document.getElementsByClassName('searchBox')[0].style.display = 'none';
    document.getElementsByClassName('navbar__search')[0].style.display = 'block';
    document.getElementsByClassName('dropdown-content3')[0].style.display = 'none';
    document.getElementsByClassName('searchBox')[0].value = ""
  }

  const expandNavbar = () => {
    document.getElementsByClassName('navbar__logo')[0].style.display = 'none';
    document.getElementsByClassName('navbar__searchBack')[0].style.display = 'block';
    document.getElementsByClassName('navbar__search')[0].style.display = 'none';
    document.getElementsByClassName('searchBox')[0].style.display = 'block';
  }

  const updateSearchResults = (e) => {
    setSearchTerm(e.target.value)
    document.getElementsByClassName('dropdown-content3')[0].style.display = 'block';
  }


  return (
    <div id="navbar">
      <div className="navbar-LogoAndSearch">
        <Link to="/">
          <img src="https://i.ibb.co/72dN4JJ/Facebook-icon-2019-1.png" className="navbar__logo" />
        </Link>
        <div className="navbar__searchBack" onClick={collapseNavbar}>
          <BackIcon className="searchBackIcon" />
        </div>
        <div className="navbar__search" onClick={expandNavbar}>
          <SearchIcon className="searchIcon" />
        </div>
        <input type="search" className="searchBox" placeholder="Search Facebook" value='' onChange={updateSearchResults} />
        <div className="dropdown-content3">
          <ul id="list">
            
          </ul>
        </div>
      </div>

      <div className="navbar__pages">
        <div className="home">
          <Link to="/"><HomeIcon title="Home" /></Link>
        </div>
        <div className="friends">
          <FriendsIcon title="Friends" />
        </div>
        <div className="market">
          <MarketIcon title="MarketPlace" />
        </div>
        <div className="groups">
          <GroupsIcon title="Groups" />
        </div>
        <div className="gaming">
          <GameIcon title='Gaming'/>
        </div>
      </div>

      <div className="navbar__otherIcons">
        <div className="round">
          <MenuIcon className='addIcon' title="Menu" />
        </div>

        <div className="round">
          <MessengerIcon className="messengerIcon" title="Messenger" />
        </div>

        <div className="round" onClick={renderNotifications}>
          <NotificationsIcon className={`notificationsIcon ${notificationsOpen && "blue"}`} title="Notifications" />
        </div>
        <div className="dropdown-content2">
          <h1>Notifications</h1>
        </div>
        <div className="round" onClick={renderProfile}>
          <DefaultProfile className={`dropdownIcon ${profileDown === true}`} title="Account" />
          <div className="dropdown-content">
            <Link to="#">
              <div className="optionDrop">
                <img src="https://i.ibb.co/1zmBtwr/84241059-189132118950875-4138507100605120512-n.jpg" alt="profile" className="Avatar" />
                <div className="sideinfoDropAvatar">
                  <p>See your profile</p>
                </div>
              </div>
            </Link>
            <div className="hr" />
            
            <div/>
            <Link to="#">
              <div className="optionDrop">
                <div className="iconDrop">
                  <i className="settings" />
                </div>
                <h1>Settings & Privacy</h1>
              </div>
            </Link>
            <Link to="#">
              <div className="optionDrop">
                <div className="iconDrop">
                  <i className="darkMode" />
                </div>
                <h1>Dark Mode</h1>
              </div>
            </Link>
            <Link to="#">
              <div className="optionDrop">
                <div className="iconDrop">
                  <i className="logout" />
                </div>
                <h1>Log out</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Header;