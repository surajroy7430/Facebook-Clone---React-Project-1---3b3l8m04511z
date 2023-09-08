import React, { useState, useEffect } from 'react'
import '../styles/SideBar1.css';
import SidebarRow1 from './SidebarRow1';

const Sidebar1 = () => {

    return (
        <div id="sidebar1">
            <SidebarRow1 ImageLink="" title="Friends" />
            <SidebarRow1 ImageLink="" title="Memories" />
            <SidebarRow1 ImageLink="" title="Saved" />
            <SidebarRow1 ImageLink="" title="Groups" />
            <SidebarRow1 ImageLink="" title="Marketplace" />
            <SidebarRow1 ImageLink="" title="Feeds" />
            <SidebarRow1 ImageLink="" title="Events" />
            <SidebarRow1 dropdown ImageLink="null" title="See more" />
            <div class="hr" />
            <div class="policies">
                <p>Privacy </p>
                <p class="dot">·</p>
                <p>Terms </p>
                <p class="dot">·</p>
                <p>Advertising </p>
                <p class="dot">·</p>
                <p>Ad Choices </p>
                <i class="ads" />
                <p class="dot">·</p>
                <p>Cookies </p>
                <p class="dot">·</p>
                <p>More </p>
                <p class="dot">·</p>
                <p>Meta © 2023</p>
            </div>
        </div>
    )
}

export default Sidebar1