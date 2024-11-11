
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';

const CampaignAction = () => {
  return (
    <Box sx={{ mt: 4 }}>
      
      <Card sx={{ padding: 2 }}>
        <CardContent>
          <Typography variant="h6">Actions</Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" fullWidth>
                Edit Campaign
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" fullWidth>
                Pause Campaign
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" fullWidth>
                Duplicate Campaign
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="success" fullWidth>
                Create New Campaign
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CampaignAction;
