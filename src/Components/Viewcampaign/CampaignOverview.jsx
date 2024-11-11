
import React from 'react';
import { Box, Typography, Grid, Chip } from '@mui/material';

const CampaignOverview = () => {
  // Sample data for the campaign overview
  const campaignData = {
    title: "Neha's Campaign",
    description: "Boost your reach with our latest campaign!",
    status: "Active", // Status can be "Active", "Paused", or "Completed"
    createdDate: "10/01/2024",
  };

  return (
    <Box sx={{ mt: 10, p: 3, bgcolor: '#ffffff', borderRadius: '8px', boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        {campaignData.title}
      </Typography>

      <Typography variant="body1" align="center" sx={{ mb: 2 }}>
        {campaignData.description}
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Chip
            label={campaignData.status}
            color={campaignData.status === "Active" ? "success" : campaignData.status === "Paused" ? "warning" : "error"}
            sx={{ fontWeight: 'bold' }}
          />
        </Grid>
        <Grid item>
          <Typography variant="body2" color="text.secondary">
            Created Date: {campaignData.createdDate}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CampaignOverview;
