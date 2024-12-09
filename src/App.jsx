import React from "react";
import Checklist from "./Checklist";
import "./App.css";
import { Typography, Box } from "@mui/material";

function App() {
  const checklists = [
    { title: "Social Media", items: ["Brevity", "Hashtags and @s", "Links and UTM parameters", "Grammar", "Images", "Final Review"] },
    { title: "Email", items: ["Brevity", "Hyperlinks and Buttons", "Grammar", "Images", "Subject line", "Mobile Responsiveness", "Send List", "Final Review"] },
    { title: "Web", items: ["Brevity", "Hyperlinks and Buttons", "Grammar", "Images", "Meta Data", "URL", "Mobile Responsiveness", "Final Review"] },
    { title: "Print", items: ["Brevity", "Grammar", "Formatting", "Contact Info", "Final Review"] },
  ];

  return (
    <Box className="app-container" sx={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Marketing Checklists
      </Typography>
      <Box className="checklist-container">
        {checklists.map((checklist, index) => (
          <Checklist key={index} title={checklist.title} items={checklist.items} />
        ))}
      </Box>
    </Box>
  );
}

export default App;