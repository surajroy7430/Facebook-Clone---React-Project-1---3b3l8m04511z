import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Box, Typography, Avatar, ThemeProvider, createTheme, Divider } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import LeftSidebar from "../Asides/LeftSidebar";
import SkeletonLoader from "../Loader/SkeletonLoader";
import { useAuth } from "../../utils/AuthStateContext";
import ProfileInfo from "./ProfileInfo";
import { theme as customTheme } from "../../styles/theme";

export default function Profile() {
    const { user } = useAuth();
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
                                    src="https://www.profilerehab.com/facebook_covers/abstract/lens_blur_cover_38.jpg"
                                    alt="profileCoverImg"
                                />
                                <Avatar
                                    alt="Profile Picture"
                                    src={user && user.profileImage}
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
                                    {user && user.name}
                                </Typography>
                            </div>
                        </div>
                        <Divider sx={{marginTop: '20px', marginBottom: '10px'}} />
                        <div className="profileRightBottom">
                            <ProfileInfo />
                        </div>
                        <SkeletonLoader />
                    </div>
                </Box>
            </Box>
        </ThemeProvider>
    </ThemeProvider>
  );
}
