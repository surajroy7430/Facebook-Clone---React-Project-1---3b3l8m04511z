import React, { useState, useEffect } from 'react'
import './ProfileSidebar.css';

function ProfileSidebar({ username }) {
    var [nposts, setNPosts] = useState([])
    const [cuserdata, setCUserdata] = useState()

    return (
        <div className="profileSidebar" >
            <div className="posts2">
                <h1>Intro</h1>
                <div className="intro">
                    
                </div>
            </div>
            <div className="posts2">
                <h1>Photos</h1>
                <div className="photos">
                    {nposts.length === 0 ? 
                        (
                            <h1 className="NoNotif">It seems that there are no image posted by this user</h1>
                        ) : (
                                nposts.map((post) => (
                                    <img src={post} />
                                ))
                            )
                    }
                </div>
            </div>
            <div class="hr profile" />
            <div class="policies profile">
                <a>Privacy</a>
                <p class="dot">·</p>
                <a>Terms</a>
                <p class="dot">·</p>
                <a>Advertising</a>
                <p class="dot">·</p>
                <a>Ad choices</a>
                <i class="ads" />
                <p class="dot">·</p>
                <a>Cookies</a>
                <p class="dot">·</p>
                <a>More</a>
                <p class="dot">·</p>
                <p>Facebook © 2020</p>
            </div>
        </div >
    )
}

export default ProfileSidebar