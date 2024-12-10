import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Checklist({ title, items }) {
  const [checkedItems, setCheckedItems] = useState(
    Array(items.length).fill(false)
  );

  const handleToggle = (index) => {
    const updatedChecked = [...checkedItems];
    updatedChecked[index] = !updatedChecked[index];
    setCheckedItems(updatedChecked);
  };

  const explanations = {
    Brevity: "Eliminate filler and redundancy to keep your message clear and concise.",
    URL: "Verify your URL is functional and easy to read. Users should be able to infer the content of the webpage or blog from the URL itself.",
    "Hashtags and @s": (
      <>
        Ensure all hashtags or tagged accounts are relevant and accurately spelled. Always use{" "}
        <a
          href="https://averment.medium.com/why-does-writing-your-hashtags-in-camel-case-make-them-more-accessible-and-what-are-the-benefits-9e3b8e13e920"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1976d2", textDecoration: "none" }}
        >
          camel case
        </a>{" "}
        for improved accessibility.
      </>
    ),
    "Links and UTM Parameters": (
      <>
        Check that all links are valid and working as intended. If you use UTM parameters, verify that they are correctly configured for each platform.
        <p />
        Remember, links do not work in Instagram posts! Use{" "}
        <a
          href="https://linktr.ee/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1976d2", textDecoration: "none" }}
        >
          Linktree
        </a>{" "}
        to provide users with easy access to your links.
      </>
    ),
    Grammar: (
      <>
        Review your content for errors in grammar, punctuation, and spelling.
        <p /> Utilize tools like{" "}
        <a
          href="https://www.grammarly.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1976d2", textDecoration: "none" }}
        >
          Grammarly
        </a>{" "}
        for assistance, but note that it won't catch every mistake.
      </>
    ),
    Images: (
      <>
        Examine images to ensure dimensions are appropriate. Add alt text for accessibility.
      </>
    ),
    "Hyperlinks and Buttons": (
      <>
        Confirm that all hyperlinks and buttons contain compelling CTAs. These should be set to open in a new tab when clicked.<p /> If you use UTM parameters, verify that they are correctly configured.
      </>
    ),
    Formatting: (
      <>
        Ensure the dimensions of your print materials are accurate and that margins, padding, and other design elements are consistent.
      </>
    ),
    "Contact Info": (
      <>
        Verify all contact information, such as phone numbers and email addresses, is correct. For business cards, always send the proof to the intended recipient before finalizing.
      </>
    ),
    Details: (
      <>
        Double-check all details for accuracy, including dates, addresses, numbers, and any other key information.
      </>
    ),
    "Final Review": (
      <>
        If allowed, submit your content to{" "}
        <a
          href="chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1976d2", textDecoration: "none" }}
        >
          ChatGPT
        </a>{" "}
        for review. While it won’t catch everything, it can help identify minor errors in text and images. <p /> You can also request feedback from a colleague to refine your messaging further.
      </>
    ),
    Subject: (
      <>
        The subject line is the most important part of any email—it's what determines if it gets opened or not! Make it count.
      </>
    ),
    "Mobile Responsiveness": (
      <>
        Ensure your content displays correctly on mobile devices. Test blogs, emails, and website updates on mobile to confirm proper formatting.
      </>
    ),
    "Send List": (
      <>
        Verify your email list is accurate and limited to the intended recipients.
      </>
    ),
    Metadata: (
      <>
        Optimize for SEO by including complete and accurate metadata, such as a title and description. If applicable, include an author as well.
      </>
    ),
  };

  const completionMessages = {
    "Social Media": "Post away!",
    Email: "Send it off!",
    Web: "Hit publish!",
    Print: "Get it printed!",
  };

  const isComplete = checkedItems.every((checked) => checked);

  return (
    <Paper elevation={3} className="checklist">
      <Typography variant="h6" gutterBottom className="checklist-title">
        {title}
      </Typography>
      <Box className="checklist-items">
        {items.map((item, index) => (
          <Accordion key={index} className="checklist-item">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkedItems[index]}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleToggle(index);
                    }}
                    color="primary"
                  />
                }
                label={item}
                onClick={(e) => e.stopPropagation()}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {explanations[item] || "No additional information available."}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      {isComplete && (
  <Typography
    variant="h6" 
    sx={{
      marginTop: "20px",
      color: "text.primary",
      textAlign: "center",
      fontWeight: "bold", 
      fontSize: "1.5rem", 
    }}
  >
    *･ﾟ✧ {completionMessages[title]} ✧･ﾟ*
  </Typography>
)}
    </Paper>
  );
}

export default Checklist;