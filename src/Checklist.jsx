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
    "Check hashtags and @s": (
  <>
    Make sure any hashtags or tagged accounts are relevant and spelled correctly. Always use {" "}
    <a 
      href="https://averment.medium.com/why-does-writing-your-hashtags-in-camel-case-make-them-more-accessible-and-what-are-the-benefits-9e3b8e13e920" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ color: '#1976d2', textDecoration: 'none' }}
    >
      camel case
    </a> {" "}
    in your hashtags for accessibility.
  </>
),
    "Check links and UTM parameters": (
  <>
    If your post includes a link, confirm that it looks correct and works. If you use UTM parameters, ensure they are properly configured for each social media platform.<p />
    Don’t forget that links won’t work on Instagram posts! Use     <a 
      href="https://linktr.ee/" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ color: '#1976d2', textDecoration: 'none' }}
    >
      Linktree
    </a> {" "} to ensure users can access your links easily.
  </>
),
"Check your grammar": (
  <>
    Look for any potential mistakes in grammar, punctuation, and spelling.<p /> You can use a writing assistant such as  {" "}   <a 
      href="https://www.grammarly.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ color: '#1976d2', textDecoration: 'none' }}
    >
      Grammarly
    </a> {" "} to help with this, but it won't detect all errors. 

  </>
),
"Check images": (
  <>
  Review images carefully, ensure proper sizing for each platform, and add alt text for accessibility.

  </>
),
"Get a second opinion": (
  <>
  If permitted, send your text and image to {" "}   <a 
      href="chatgpt.com" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ color: '#1976d2', textDecoration: 'none' }}
    >
      ChatGPT
    </a> {" "} to review. While it won't catch everything, ChatGPT can often detect minor mistakes.  <p/> Have a co-worker review your post for clarity, tone, and any details you might have overlooked. 
  </>
),
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