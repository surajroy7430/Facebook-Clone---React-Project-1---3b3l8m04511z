import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Box, Typography, Avatar, ThemeProvider, createTheme, Divider } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import LeftSidebar from "../Asides/LeftSidebar";
import { theme as customTheme } from "../../styles/theme";
import { useParams } from "react-router-dom";
import { FetchPosts, viewUserProfile } from "../../utils/APIs";

const UsersProfile = () => {
    // const { user } = useAuth();
    const { id } = useParams();
    const [userProfileData, setUserProfileData] = useState(null);
    const [users, setUsers] = useState([]);
    const limit = 100;
    const token = localStorage.getItem("authToken");
    const storedTheme = localStorage.getItem("theme") || "light";
    const [mode, setMode] = useState(storedTheme);

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

    useEffect(() => {
        localStorage.setItem("theme", mode);
    }, [mode]);

    useEffect(() => {
        const fetchUserProfile = async () => {
          try {
            const data = await viewUserProfile(id, token);
            setUserProfileData(data);
            console.log(data);
          } catch (error) {
            console.error("Error fetching user profile:", error);
          }
        };
    
        fetchUserProfile();
      }, [id, token]);

      const {name, address, gender, email, phone, profileImage, education, workExperience} = userProfileData || {};

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
    <ThemeProvider theme={customTheme}>
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar setMode={setMode} mode={mode} />
                <Box className='profile'>
                    <LeftSidebar />
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img
                                    className="profileCoverImg"
                                    src='https://i.pinimg.com/originals/4a/88/7e/4a887e68509737452a38ba244079b8a0.jpg'
                                    alt="profileCoverImg"
                                />
                                <Avatar
                                    alt="Profile Picture"
                                    src={profileImage}
                                    sx={{
                                        width: 150,
                                        height: 150,
                                        border: "3px solid white",
                                        position: "absolute",
                                        left: 0,
                                        right: 0,
                                        margin: "auto",
                                        top: 170,
                                        cursor: 'pointer'
                                    }}
                                />
                            </div>
                            <div className="profileInfo">
                                <Typography variant="h4" className="profileInfoName">
                                {name}
                                </Typography>
                            </div>
                        </div>
                        <Divider sx={{marginTop: '20px', marginBottom: '10px'}} />
                        <div className="profileRightBottom">
                            <Box className='profileSidebar'>
                                <Box className='profileSidebarWrapper'>
                                    <Typography className="rightbarTitle">USER INFORMATION</Typography>
                                    <Box className="rightbarInfo">
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">Email:
                                                <span className="rightbarInfoValue"> {email}</span>
                                            </Typography>
                                        </Box>
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">Phone:
                                                <span className="rightbarInfoValue"> {phone}</span>
                                            </Typography>
                                        </Box>
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">Gender:
                                                <span className="rightbarInfoValue"> {gender}</span>
                                            </Typography>
                                        </Box>
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">City:
                                                <span className="rightbarInfoValue"> {address && address[0].city}</span>
                                            </Typography>
                                        </Box>
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">Country:
                                                <span className="rightbarInfoValue"> {address && address[0].country}</span>
                                            </Typography>
                                        </Box>
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">Relationship:
                                                <span className="rightbarInfoValue"> Single</span>
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography className="rightbarTitle">EDUCATION</Typography>
                                    <Box>
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">School:
                                                <span className="rightbarInfoValue"> {education && education[0].schoolName}</span>
                                            </Typography>
                                        </Box>
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">Degree:
                                                <span className="rightbarInfoValue"> {education && education[0].degree}</span>
                                            </Typography>
                                        </Box>
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">Description:
                                                <span className="rightbarInfoValue"> {education && education[0].description}</span>
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography className="rightbarTitle">WORK EXPERIENCE</Typography>
                                    <Box>
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">Company:
                                                <span className="rightbarInfoValue"> {workExperience && workExperience[0].companyName}</span>
                                            </Typography>
                                        </Box>
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">Designation:
                                                <span className="rightbarInfoValue"> {workExperience && workExperience[0].designation}</span>
                                            </Typography>
                                        </Box>
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">Job Description:
                                                <span className="rightbarInfoValue"> {workExperience && workExperience[0].description}</span>
                                            </Typography>
                                        </Box>
                                        <Box className="rightbarInfoItem">
                                            <Typography className="rightbarInfoKey">Location:
                                                <span className="rightbarInfoValue"> {workExperience && workExperience[0].location}</span>
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
                        </div>
                    </div>
                </Box>
            </Box>
        </ThemeProvider>
    </ThemeProvider>
  )
}

export default UsersProfile
