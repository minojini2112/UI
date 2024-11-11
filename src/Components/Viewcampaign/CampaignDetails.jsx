//Creative Assets: Display of images, videos, and any other media used in the campaign.
//Content Calendar: Overview of when specific content was published or scheduled.
//Messaging Summary: Key messages or themes used in the campaign. 

import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';

const ContentDetails = () => {
  const creativeAssets = [
    { type: 'Image', src: '/path/to/image1.jpg', title: 'Image 1' },
    { type: 'Video', src: '/path/to/video1.mp4', title: 'Video 1' },
    { type: 'Image', src: '/path/to/image2.jpg', title: 'Image 2' },
    { type: 'Image', src: '/path/to/image3.jpg', title: 'Image 3' },
  ];

  const contentCalendar = [
    { date: '2024-10-01', content: 'Launch campaign video' },
    { date: '2024-10-05', content: 'Post promotional image' },
    { date: '2024-10-10', content: 'Share user testimonials' },
    { date: '2024-10-15', content: 'Launch special offer' },
  ];

  const messagingSummary = [
    'Engage your audience with exciting visuals.',
    'Highlight the key features of your product.',
    'Utilize user-generated content to build trust.',
    'Create a sense of urgency with limited-time offers.',
  ];

  return (
    <Box sx={{ mt: 4, p: 2, bgcolor: '#ffffff', borderRadius: '8px', boxShadow: 3 }}>
      <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Content Details
      </Typography>

      {/* Creative Assets */}
      <Typography variant="h6" gutterBottom>
        Creative Assets
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {creativeAssets.map((asset, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 2 }}>
              {asset.type === 'Image' ? (
                <CardMedia component="img" alt={asset.title} height="140" image={asset.src} />
              ) : (
                <CardMedia component="video" controls height="140" src={asset.src} />
              )}
              <CardContent>
                <Typography variant="h6">{asset.title}</Typography>
                <Typography variant="body2">{asset.type}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Content Calendar */}
      <Typography variant="h6" gutterBottom>
        Content Calendar
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {contentCalendar.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ boxShadow: 2, p: 2 }}>
              <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center' }}>
                <CalendarToday sx={{ mr: 1 }} />
                {item.date}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2">{item.content}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Messaging Summary */}
      <Typography variant="h6" gutterBottom>
        Messaging Summary
      </Typography>
      <List sx={{ bgcolor: '#f9f9f9', borderRadius: '8px', boxShadow: 1 }}>
        {messagingSummary.map((message, index) => (
          <ListItem key={index}>
            <ListItemText primary={message} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContentDetails;
