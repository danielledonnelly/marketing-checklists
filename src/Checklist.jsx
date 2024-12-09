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
    "Brevity": "Remove filler and repetition to keep your message concise yet clear.",
    "URL": "Check your URL to ensure it works and is easily readable. A user should be able to tell what the webpage or blog will be about just by reading the URL.",
    "Hashtags and @s": (
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
    "Links and UTM Parameters": (
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
"Grammar": (
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
"Images": (
  <>
  Review images carefully, check to confirm the dimensions are correct, and add alt text for accessibility.

  </>
),

"Hyperlinks and Buttons": (
  <>
    When reviewing hyperlinks or buttons, always verify that they are set to open in a new tab rather than the current page. Ensure that the text of your hyperlink or button is a compelling CTA. <p/> If you use UTM parameters, check to ensure they are present and properly formatted.
  </>
),

"Formatting": (
  <>
  Check to confirm that the dimensions of your print collateral are correct and that there are no issues with margins, padding, or any other design elements.

  </>
),

"Contact Info": (
  <>
  Check to confirm that any phone numbers or emails included in the material are accurate. If you're ordering business cards, always send the proof to the individual you are ordering for before proceeding.

  </>
),

"Final Review": (
  <>
  If permitted, send your content (including both text and any images) to {" "}   <a 
      href="chatgpt.com" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ color: '#1976d2', textDecoration: 'none' }}
    >
      ChatGPT
    </a> {" "} to review. While it won't catch everything, ChatGPT can often detect minor mistakes.  <p/> Have a co-worker review your post for clarity, tone, and any details you might have overlooked. 
  </>
),
"Subject Line": (
  <>
  The subject line is the most important part of an email – it's what determines if it gets opened or not! Make it count; ensure your subject line is compelling and relevant.
  </>
),
"Mobile Responsiveness": (
  <>
  Make sure your content is mobile-friendly. Whenever you publish a blog, draft a marketing email, or update your site, remember to review the content on a mobile device to ensure everything is formatted correctly.
  </>
),

"Send List": (
  <>
  Make sure your emails only go to the correct contacts. Confirm that you have an accurate list before using it.
  </>
),
"Meta Data": (
  <>
  Make sure you're set up for SEO success with complete and accurate meta data, including a title and a description. If publishing a blog, include an author in the meta data as well.
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