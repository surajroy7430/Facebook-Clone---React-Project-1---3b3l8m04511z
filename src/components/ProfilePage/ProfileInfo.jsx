import React, { useEffect, useState } from 'react'
import './ProfileInfo.css'
import { Box, Typography } from '@mui/material'
import { FetchPosts } from '../../utils/APIs';

const ProfileInfo = () => {
  const [users, setUsers] = useState([]);
  const limit = 80;

  useEffect(() => {
    const fetchData = async() => {
      try {
        const usersData = await FetchPosts(limit);

        const filteredUsers = usersData.reduce((accumulator, currentUser) => {
          if (!accumulator[currentUser.author.name]) {
            accumulator[currentUser.author.name] = currentUser;
          }
          return accumulator;
        }, {});

        setUsers(Object.values(filteredUsers));
        // console.log('filteredUsers', filteredUsers);
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    fetchData();
  }, [])

  return (
    <Box className='profileSidebar'>
      <Box className='profileSidebarWrapper'>
        <Typography className="rightbarTitle">USER INFORMATION</Typography>
        <Box className="rightbarInfo">
          <Box className="rightbarInfoItem">
            <Typography className="rightbarInfoKey">City:
              <span className="rightbarInfoValue"> Delhi</span>
            </Typography>
          </Box>
          <Box className="rightbarInfoItem">
            <Typography className="rightbarInfoKey">From:
              <span className="rightbarInfoValue"> India</span>
            </Typography>
          </Box>
          <Box className="rightbarInfoItem">
            <Typography className="rightbarInfoKey">Relationship:
              <span className="rightbarInfoValue"> Single</span>
            </Typography>
          </Box>
        </Box>
        <Typography className="rightbarTitle">FRIENDS</Typography>
        <Box className="rightbarFollowings">
          {users && users.slice(20, 50).map((user) => (
            <Box className="rightbarFollowing" key={user._id}>
              <img
                src={user.author.profileImage}
                alt=""
                className="rightbarFollowingImg"
              />
              <Typography className="rightbarFollowingName">{user.author.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileInfo
