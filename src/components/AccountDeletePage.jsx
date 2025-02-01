import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { useState, useEffect } from "react";

// Sample JSON data (Replace with actual API or config file)
const appData = {
  appName: "Feradox",
  developerName: "Feradox",
  contactEmail: "peradoxmail@gmail.com",
  deletionSteps: [
    "Go to the app settings and navigate to the Account section.",
    "Select 'Delete My Account'.",
    "Confirm your request by following the on-screen instructions.",
    "For manual deletion requests, email us at peradoxmail@gmail.com."
  ],
  dataRetentionInfo: "All user data will be permanently deleted upon account deletion. Some legal data retention may apply as per governing laws.",
  images: [
    "/assets/s3.jpg",
    "/assets/s1.jpg",
    "/assets/s4.jpg",
    "/assets/s2.jpg",
  ],
};

const AccountDeletePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating fetching data from a config file or API
    setData(appData);
  }, []);

  if (!data) return <Typography color="black">Loading...</Typography>;

  return (
    <Container maxWidth="md" sx={{ marginTop: "78px", color: "black" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "black" }}>
        {data.appName} - Account Deletion Guide
      </Typography>
      <Typography variant="h6" sx={{ color: "black" }}>
        Developer: {data.developerName}
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, color: "black" }}>
        Follow these steps to permanently delete your account and all associated data:
      </Typography>
      <Box sx={{ mt: 2 }}>
        <ol>
          {data.deletionSteps.map((step, index) => (
            <li key={index}><Typography sx={{ color: "black" }}>{step}</Typography></li>
          ))}
        </ol>
      </Box>
      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold", color: "black" }}>
        Data Retention & Deletion Policy
      </Typography>
      <Typography sx={{ color: "black" }}>{data.dataRetentionInfo}</Typography>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold", color: "black" }}>
        Screenshots
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 2 }}>
        {data.images.map((img, index) => (
          <Box key={index} component="img" src={img} alt="Deletion Step" width="100%" maxWidth={300} />
        ))}
      </Box>

      <Box sx={{ marginBottom: '12px', mt: 4 }}>
        <Button variant="contained" color="primary" href={`mailto:${data.contactEmail}`}>
          Request Account Deletion
        </Button>
      </Box>
    </Container>
  );
};

export default AccountDeletePage;