import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@mui/icons-material';

const Navbar = () => {

  const collapseNavSearch = () => {
    document.getElementsByClassName('fb-icon')[0].style.display = 'block'
    document.getElementsByClassName('navbar-searchBackButton')[0].style.display = 'none'
    document.getElementsByClassName('navbar-search')[0].style.display = 'block'
    document.getElementsByClassName('search-dropdown-content')[0].style.display = 'none'
    document.getElementsByClassName('search-box')[0].style.display = 'none'
    document.getElementsByClassName('search-box')[0].value = ''
  }
  const expandNavSearch = () => {
    document.getElementsByClassName('fb-icon')[0].style.display = 'none'
    document.getElementsByClassName('navbar-searchBackButton')[0].style.display = 'block'
    document.getElementsByClassName('navbar-search')[0].style.display = 'block'
    document.getElementsByClassName('search-box')[0].style.display = 'block'
  }
  return (
        <nav id='navbar' className='navbar navbar-expand-lg fixed-top'>
            <div className='navbar-logoAndSearch'>
                <Link to='/'>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico' alt='fb_icon' className='fb-icon' />
                </Link>
                <div className='navbar-searchBackButton' onClick={collapseNavSearch}>
                  <i className='searchBackButton' />
                </div>
                <div className='navbar-search' onClick={expandNavSearch}>
                  <SearchOutlined />
                </div>
                <input type="text" className='search-box' placeholder='Search Facebook' />
                <div className='search-dropdown-content'>
                  <ul id='dropdown-List'>
                    {/* ---------------------------- */}
                  </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar;
