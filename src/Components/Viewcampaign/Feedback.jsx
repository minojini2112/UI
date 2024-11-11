//Team Comments: Section for team members to leave feedback or notes about the campaign’s performance.
//Action Items: List of suggested improvements or changes based on current performance.

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Feedback= () => {
  const feedback = [
    "The campaign's engagement rates are lower than expected. Consider adjusting the targeting.",
    "Great visuals! The team appreciated the creativity in the ads.",
    "We should analyze the times of highest engagement for future campaigns.",
  ];

  const [comment, setComment] = React.useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // Add your submit logic here
    console.log("Comment submitted: ", comment);
    setComment(''); // Clear the input after submission
  };

  return (
    <Box sx={{ mt: 4, p: 2, bgcolor: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom align="center">
        Feedback and Notes
      </Typography>

      {/* Team Comments */}
      <Card sx={{ mb: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Team Comments
          </Typography>
          <List>
            {feedback.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Leave your comment..."
            value={comment}
            onChange={handleCommentChange}
            sx={{ mt: 2 }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleCommentSubmit}
            sx={{ mt: 2 }}
          >
            Submit Comment
          </Button>
        </CardContent>
      </Card>

      {/* Action Items */}
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Action Items
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Review ad targeting options for better engagement." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Schedule a meeting to discuss the campaign performance." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Prepare a follow-up report on conversion rates." />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Feedback;

