//Detailed Spending Report: Breakdown of expenditures on different platforms or content types.
//ROI Calculation: Return on Investment metrics based on conversions relative to spend.
// BudgetAndSpendTracking.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const BudgetAndSpendTracking = () => {
  const spendingData = [
    { platform: 'Facebook Ads', amount: '$2000' },
    { platform: 'Google Ads', amount: '$1500' },
    { platform: 'Instagram Ads', amount: '$1200' },
    { platform: 'Twitter Ads', amount: '$800' },
  ];

  const roi = {
    conversions: 300,
    revenue: '$9000',
    totalSpend: '$6000',
    roiPercentage: '50%',
  };

  return (
    <Box sx={{ mt: 4, p: 2, bgcolor: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom align="center">
        Budget and Spend Tracking
      </Typography>

      {/* Detailed Spending Report */}
      <Card sx={{ mb: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Detailed Spending Report
          </Typography>
          <List>
            {spendingData.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item.platform} secondary={item.amount} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* ROI Calculation */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            ROI Calculation
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ bgcolor: '#e3f2fd', padding: '16px', textAlign: 'center' }}>
                <Typography variant="body1">Conversions</Typography>
                <Typography variant="h5">{roi.conversions}</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ bgcolor: '#e3f2fd', padding: '16px', textAlign: 'center' }}>
                <Typography variant="body1">Revenue</Typography>
                <Typography variant="h5">{roi.revenue}</Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ bgcolor: '#e3f2fd', padding: '16px', textAlign: 'center' }}>
                <Typography variant="body1">Total Spend</Typography>
                <Typography variant="h5">{roi.totalSpend}</Typography>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="h6">ROI: {roi.roiPercentage}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BudgetAndSpendTracking;
