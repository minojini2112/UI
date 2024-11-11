//Demographic Breakdown: Information on the audience reached (age, gender, location).
//Engagement Metrics by Audience Segment: Performance data segmented by different demographics or audience interests.
// AudienceInsights.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, Paper } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const AudienceInsights = () => {
  const demographics = [
    { label: 'Age Group 18-24', percentage: 25 },
    { label: 'Age Group 25-34', percentage: 35 },
    { label: 'Age Group 35-44', percentage: 20 },
    { label: 'Age Group 45+', percentage: 20 },
  ];

  const engagementMetrics = [
    { segment: 'Females', engagement: 70 },
    { segment: 'Males', engagement: 60 },
    { segment: 'Urban', engagement: 75 },
    { segment: 'Rural', engagement: 50 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Box sx={{ mt: 4, p: 2, bgcolor: '#ffffff', borderRadius: '8px', boxShadow: 3 }}>
      <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Audience Insights
      </Typography>

      {/* Demographic Breakdown */}
      <Typography variant="h6" gutterBottom>
        Demographic Breakdown
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: '8px' }}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={demographics} dataKey="percentage" nameKey="label" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
                  {demographics.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
              Age Group Distribution
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {demographics.map((item, index) => (
              <Grid item xs={6} key={index}>
                <Card sx={{ boxShadow: 2, bgcolor: '#f0f0f0', p: 2, textAlign: 'center' }}>
                  <CardContent>
                    <Typography variant="h6">{item.label}</Typography>
                    <Typography variant="body2">{item.percentage}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Engagement Metrics by Audience Segment */}
      <Typography variant="h6" gutterBottom>
        Engagement Metrics by Audience Segment
      </Typography>
      <List sx={{ bgcolor: '#f9f9f9', borderRadius: '8px', boxShadow: 1 }}>
        {engagementMetrics.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${item.segment}`} secondary={`Engagement: ${item.engagement}%`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AudienceInsights;
