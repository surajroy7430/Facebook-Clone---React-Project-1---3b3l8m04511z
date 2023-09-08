import React, { useState, useEffect } from 'react'
import '../styles/SideBar1.css';
import SidebarRow1 from './SidebarRow1';

const Sidebar1 = () => {

    return (
        <div id="sidebar1">
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/7_gcmlwrelX.png" title="COVID-19 Information Centre" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" title="Find Friends" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png" title="Groups" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png" title="Marketplace" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png" title="Videos" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/N7UOh8REweU.png" title="Events" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/Uy-TOlM5VXG.png" title="Memories" />
            <SidebarRow1 ImageLink="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png" title="Saved" />
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