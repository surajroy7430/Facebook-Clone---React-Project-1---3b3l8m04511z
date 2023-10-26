import React, { useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from '../components/Navbar/Navbar'
import RightSidebar from '../components/Asides/RightSidebar';
import LeftSidebar from '../components/Asides/LeftSidebar';
import SkeletonLoader from '../components/Loader/SkeletonLoader';
import PostUpload from '../components/Posts/PostUpload';

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
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftSidebar setMode={setMode} mode={mode}/>
          <SkeletonLoader />
          <RightSidebar />
        </Stack>
        <PostUpload />
      </Box>
    </ThemeProvider>
  )
}

export default HomePage
