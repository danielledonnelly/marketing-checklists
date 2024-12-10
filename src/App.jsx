import React, { useState } from "react";
import Checklist from "./Checklist";
import "./App.css";
import { Typography, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/system";
import { Switch } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 28,
  padding: 0,
  display: "flex",
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(22px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#808080",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 24,
    height: 24,
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: 16,
      color: theme.palette.mode === "dark" ? "#000" : "#fff",
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#808080",
    opacity: 1,
    transition: theme.transitions.create(["background-color"]),
  },
}));

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#121212",
        paper: "#1e1e1e",
      },
      text: {
        primary: "#ffffff",
        secondary: "#b0b0b0",
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#f5f5f5",
        paper: "#ffffff",
      },
      text: {
        primary: "#000000",
        secondary: "#424242",
      },
    },
  });

  const checklists = [
    { title: "Social Media", items: ["Brevity", "Hashtags and @s", "Links and UTM Parameters", "Details", "Grammar", "Images", "Final Review"] },
    { title: "Email", items: ["Brevity", "Hyperlinks and Buttons", "Details", "Grammar", "Images", "Subject", "Mobile Responsiveness", "Send List", "Final Review"] },
    { title: "Web", items: ["Brevity", "Hyperlinks and Buttons", "Details", "Grammar", "Images", "Meta Data", "URL", "Mobile Responsiveness", "Final Review"] },
    { title: "Print", items: ["Brevity", "Grammar", "Details", "Formatting", "Contact Info", "Final Review"] },
  ];

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box className="app-container" sx={{ textAlign: "center", padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "left" }}>
            Marketing Checklists
          </Typography>
          <Typography
            variant="h6"
            className="tagline"
            sx={{
              fontSize: "1.2rem",
              color: "rgba(200, 200, 200, 0.8)", 
              textAlign: "center",
              flex: 1,
            }}
          >
            Because successful marketing is all about the details.
          </Typography>
          <StyledSwitch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            icon={<Brightness7Icon />}
            checkedIcon={<Brightness4Icon />}
          />
        </Box>
        <Box className="checklist-container">
          {checklists.map((checklist, index) => (
            <Checklist key={index} title={checklist.title} items={checklist.items} />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;