import React, { useEffect, useState } from "react";
import "./PageData.css";
import { Box, 
    Typography, 
    Avatar, 
    Divider, 
    ThemeProvider, 
    createTheme, 
    useMediaQuery, 
    useTheme, 
    Tabs, 
    Tab, 
    Stack 
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import { useAuth } from "../../utils/AuthStateContext";
import { theme as customTheme } from "../../styles/theme";
import SkeletonLoader from "../Loader/SkeletonLoader";
import LeftSidebar from "../Asides/LeftSidebar";

const PageData = () => {
    const { user } = useAuth();
    const [tabValue, setTabValue] = useState(0);
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const storedTheme = sessionStorage.getItem("theme") || "light";
    const [mode, setMode] = useState(storedTheme);

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    });

    useEffect(() => {
        sessionStorage.setItem("theme", mode);
    }, [mode]);

    const topTabs = [
        {id: 1, name: 'Posts'},
        {id: 2, name: 'About'},
        {id: 3, name: 'Mentions'},
        {id: 4, name: 'Reels'},
        {id: 5, name: 'Photos'},
        {id: 5, name: 'Videos'},
        {id: 5, name: 'More'},
    ];

  return (
    <ThemeProvider theme={customTheme}>
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Box>
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
                                            top: 400
                                        }}>
                                            Page Name
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                    <Divider sx={{marginBottom: '10px'}} />
                    {!isMD && (
                        <Tabs 
                          value={tabValue} 
                          indicatorColor=''
                          TabIndicatorProps={{style: {backgroundColor: "white", height: 4}}}
                          onChange={(event, newValue) => setTabValue(newValue)}
                          sx={{marginLeft: '150px', marginRight: 'auto'}}
                        >
                            {topTabs.map(tab => (
                                <Tab 
                                    key={tab.id}
                                    LinkComponent={Link} 
                                    to={tab.link}
                                    label={tab.name}
                                />
                            ))}
                        </Tabs>
                    )}
                </Box>
                <Stack direction='row'>
                    <LeftSidebar />
                    <SkeletonLoader />
                </Stack>
            </Box>
        </ThemeProvider>
    </ThemeProvider>
  );
}

export default PageData;
