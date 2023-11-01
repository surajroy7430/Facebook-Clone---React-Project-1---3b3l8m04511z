import React, { useState } from "react";
import "./PageData.css";
import { Box, Typography, Avatar, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { useAuth } from "../../utils/AuthStateContext";

const PageData = () => {
    const { user } = useAuth();
    const [mode, setMode] = useState("light");

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

  return (
    <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar setMode={setMode} mode={mode} />
        <Box className='pages'>
            <div className="pagesWrapper">
                <div className="pagesTop">
                    <div>
                        <div className="pageCover">
                            <img
                                className="pageCoverImg"
                                src="https://eset-info.canon-its.jp/files/user/malware_info/images/special/160512/images/0.jpg"
                                alt="pageCoverImg"
                            />
                        </div>
                        <div>
                            <Avatar
                                alt="Page Image"
                                src={user && user.profileImage}
                                sx={{
                                    width: 200,
                                    height: 200,
                                    border: "3px solid white",
                                    position: "absolute",
                                    left: 200,
                                    top: 300,
                                    cursor: 'pointer'
                                }}
                            />
                            <Typography variant="h4" style={{
                                position: 'absolute',
                                left: 420,
                                top: 400,
                            }}>
                                {user && user.name}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
        </Box>
    </ThemeProvider>
  );
}

export default PageData;
