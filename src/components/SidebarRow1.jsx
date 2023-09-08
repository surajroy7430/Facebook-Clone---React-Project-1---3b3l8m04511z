import React from 'react'
import '../styles/SidebarRow1.css';
import {ReactComponent as ArrowDownIcon} from '../assets/seemore.svg'

const SidebarRow1 = ({ ImageLink, title, dropdown, avatar }) => {
    return (
        <div className={`sidebarRow`}>
            <img src={ImageLink} alt="" className={`sidebarRow__icon ${avatar && "avatar"} ${dropdown && 'vanish'}`} />
            <div className={`dropdownDiv ${dropdown && "display"}`}>
                <ArrowDownIcon className={`dropdown ${dropdown && "display"}`} />
            </div>
            <h2 className={`sidebarRow__title`}>{title}</h2>
        </div >
    )
}

export default SidebarRow1