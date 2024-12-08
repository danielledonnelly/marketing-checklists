import React, { useState } from "react";
import { Box, Checkbox, FormControlLabel, Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Checklist({ title, items }) {
  const [checkedItems, setCheckedItems] = useState(Array(items.length).fill(false));

  const handleToggle = (index) => {
    const updatedChecked = [...checkedItems];
    updatedChecked[index] = !updatedChecked[index];
    setCheckedItems(updatedChecked);
  };

  const explanations = {
    "Check for brevity": "Remove filler and repetition to keep your message concise yet clear.",
    "Add hashtags": "Include relevant hashtags to improve discoverability on social media.",
    "Include a call-to-action": "Encourage your audience to take a specific action, such as clicking a link or sharing your post.",
  };

  return (
    <Paper elevation={3} className="checklist">
      <Typography variant="h6" gutterBottom className="checklist-title">
        {title}
      </Typography>
      <Box className="checklist-items">
        {items.map((item, index) => (
          <Accordion key={index} className="checklist-item">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedItems[index]}
                    onChange={(e) => {
                      e.stopPropagation(); // Prevent the checkbox click from toggling the accordion
                      handleToggle(index);
                    }}
                    color="primary"
                  />
                }
                label={item}
                onClick={(e) => e.stopPropagation()} // Prevent label click from toggling the accordion
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{explanations[item] || "No additional information available."}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Paper>
  );
}

export default Checklist;