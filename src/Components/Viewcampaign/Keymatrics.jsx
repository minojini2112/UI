//Total Budget: The overall budget allocated for the campaign.
//Amount Spent: Total expenditure so far.
//Reach: Number of people who have seen the campaign.
//Engagement Rate: Metrics like likes, shares, comments, and interactions.
//Conversions: Number of completed actions (sales, sign-ups).


// KeyMetricsSnapshot.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const KeyMetricsSnapshot = () => {
  // Sample data for metrics
  const metrics = [
    {
      title: 'Total Budget',
      value: '$50,000',
      description: 'The overall budget allocated for the campaign.',
    },
    {
      title: 'Amount Spent',
      value: '$20,000',
      description: 'Total expenditure so far.',
    },
    {
      title: 'Reach',
      value: '15,000',
      description: 'Number of people who have seen the campaign.',
    },
    {
      title: 'Engagement Rate',
      value: '5.2%',
      description: 'Metrics like likes, shares, comments, and interactions.',
    },
    {
      title: 'Conversions',
      value: '350',
      description: 'Number of completed actions (sales, sign-ups).',
    },
  ];

  return (
    <Box sx={{ mt: 4, p: 2, bgcolor: '#ffffff', borderRadius: '8px', boxShadow: 3 }}>
      <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Key Metrics Snapshot
      </Typography>
      <Grid container spacing={2}>
        {metrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ bgcolor: '#f9f9f9', borderRadius: '8px', boxShadow: 1 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {metric.title}
                </Typography>
                <Typography variant="h5" sx={{ color: '#3f51b5', fontWeight: 'bold' }}>
                  {metric.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {metric.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KeyMetricsSnapshot;
