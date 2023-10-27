import React, { useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from '../components/Navbar/Navbar'
import RightSidebar from '../components/Asides/RightSidebar';
import LeftSidebar from '../components/Asides/LeftSidebar';
import SkeletonLoader from '../components/Loader/SkeletonLoader';
import PostUpload from '../components/Posts/PostUpload';
// import ImageUpload from '../components/ImageUpload';

const HomePage = () => {
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
        
        {/* <ImageUpload /> */}
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftSidebar/>
          <div 
            style={{display: 'flex', flexDirection: 'column'}}
          > 
            <PostUpload /> 
            <SkeletonLoader />
          </div>
          
          <RightSidebar />
        </Stack>
        
        
      </Box>
    </ThemeProvider>
  )
}

export default HomePage
