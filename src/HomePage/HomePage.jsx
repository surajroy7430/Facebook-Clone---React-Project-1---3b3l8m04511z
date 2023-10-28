import React, { useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from '../components/Navbar/Navbar'
import RightSidebar from '../components/Asides/RightSidebar';
import LeftSidebar from '../components/Asides/LeftSidebar';
import SkeletonLoader from '../components/Loader/SkeletonLoader';

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
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftSidebar/>
          <SkeletonLoader /> 
          <RightSidebar />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default HomePage
