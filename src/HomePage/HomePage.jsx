import React, { useEffect, useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from '../components/Navbar/Navbar'
import RightSidebar from '../components/Asides/RightSidebar';
import LeftSidebar from '../components/Asides/LeftSidebar';
import SkeletonLoader from '../components/Loader/SkeletonLoader';
import { theme as customTheme } from '../styles/theme';

const HomePage = () => {
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
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <LeftSidebar/>
            <SkeletonLoader /> 
            <RightSidebar />
          </Stack>
        </Box>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default HomePage
