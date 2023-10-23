import React, { useState, useEffect } from 'react'
import '../styles/SideBar1.css';
import SidebarRow1 from './SidebarRow1';
import {ReactComponent as FriendsIcon} from '../assets/friends.svg'

const Sidebar1 = () => {

    return (
        <div id="sidebar1">
            <SidebarRow1 ImageLink={<FriendsIcon />} title="Friends" className="side_friends" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png" title="Memories" className="side_memories" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png" title="Saved" className="side_saved" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png" title="Groups" className="side_groups" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png" title="Marketplace" className="side_marketplace" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png" title="Feeds" className="side_feeds" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png" title="Events" className="side_events" />
            <SidebarRow1 dropdown ImageLink="null" title="See more" />
            <div className="hr" />
            <footer>
                <div className="policies">
                    <a>Privacy</a>
                    <p className="dot">·</p>
                    <a>Terms</a>
                    <p className="dot">·</p>
                    <a>Advertising</a>
                    <p className="dot">·</p>
                    <a>Ad Choices</a>
                    <p className="dot">·</p>
                    <a>Cookies </a>
                    <p className="dot">·</p>
                    <p>More </p>
                    <p className="dot">·</p>
                    <p>Meta © 2023</p>
                </div>
            </footer>
        </div>
    )
}

export default Sidebar1