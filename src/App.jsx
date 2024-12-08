import React from "react";
import Checklist from "./Checklist";
import "./App.css";
import { Typography, Box } from "@mui/material";

function App() {
  const checklists = [
    { title: "Social Media", items: ["Check for brevity", "Add hashtags", "Include a call-to-action"] },
    { title: "Blog", items: ["Check for brevity", "Optimize for SEO", "Add images"] },
    { title: "Web", items: ["Check for brevity", "Check responsiveness", "Ensure fast load times"] },
    { title: "Print", items: ["Check for brevity", "Check alignment", "Include contact info"] },
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