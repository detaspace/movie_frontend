import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { useState, useEffect } from "react";

// Sample JSON data (Replace with actual API or config file)
const appData = {
  appName: "Feradox",
  developerName: "Feradox",
  contactEmail: "peradoxmail@gmail.com",
  dataCollected: ["Name", "Email", "Usage Data"],
  retentionPolicy: "User data is retained until the user requests account deletion.",
  images: [
    "/assets/s6.jpg",
    "/assets/s5.jpg",
    "/assets/s7.jpg",
  ],
};

const AccountDeletionPolicy = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(appData);
  }, []);

  if (!data) return <Typography color="black">Loading...</Typography>;

  return (
    <Container maxWidth="md" sx={{ marginTop: "78px",color: "black" }}> {/* Global black text color */}
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "black" }}>
        {data.appName} - Account & Data Deletion Policy
      </Typography>
      <Typography variant="h6" sx={{ color: "black" }}>
        Developer: {data.developerName}
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, color: "black" }}>
        If you wish to request the deletion of your account and associated data,
        please follow these steps:
      </Typography>
      <Box sx={{ mt: 2 }}>
        <ol>
          <li><Typography sx={{ color: "black" }}>Go to the app settings and select "Delete My Account".</Typography></li>
          <li><Typography sx={{ color: "black" }}>Confirm your request.</Typography></li>
          <li>
            <Typography sx={{ color: "black" }}>
              If you need manual assistance, contact us at:
              <strong> {data.contactEmail} </strong>
            </Typography>
          </li>
        </ol>
      </Box>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold", color: "black" }}>
        Data Collected
      </Typography>
      <Typography sx={{ color: "black" }}>{data.dataCollected.join(", ")}</Typography>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold", color: "black" }}>
        Data Retention Policy
      </Typography>
      <Typography sx={{ color: "black" }}>{data.retentionPolicy}</Typography>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold", color: "black" }}>
        Screenshots
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 2 }}>
        {data.images.map((img, index) => (
          <Box key={index} component="img" src={img} alt="App Screenshot" width="100%" maxWidth={300} />
        ))}
      </Box>

      <Box sx={{ marginBottom: "12px",mt: 4 }}>
        <Button variant="contained" color="primary" href={`mailto:${data.contactEmail}`}>
          Request Account Deletion
        </Button>
      </Box>
    </Container>
  );
};

export default AccountDeletionPolicy;