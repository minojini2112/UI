//Download Report: Button to export the campaign report in PDF or Excel format.
//Share Campaign: Options to share the campaign details with team members or stakeholders via email or direct link.

import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const CampaignReport = () => {
  return (
    <Box sx={{ mt: 4, p: 2, bgcolor: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom align="center">
        Reporting and Export Options
      </Typography>
      <Card sx={{ marginBottom: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Export Options
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{
                  padding: '10px',
                  fontSize: '16px',
                  '&:hover': {
                    backgroundColor: '#004ba0',
                  }
                }}
              >
                Download Report (PDF)
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                variant="contained" 
                color="secondary" 
                fullWidth 
                sx={{
                  padding: '10px',
                  fontSize: '16px',
                  '&:hover': {
                    backgroundColor: '#c60c40',
                  }
                }}
              >
                Download Report (Excel)
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Share Campaign
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button 
                variant="outlined" 
                color="primary" 
                fullWidth 
                sx={{
                  padding: '10px',
                  fontSize: '16px',
                  borderColor: '#004ba0',
                  '&:hover': {
                    backgroundColor: '#004ba0',
                    color: '#fff',
                  }
                }}
              >
                Share via Email
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                variant="outlined" 
                color="success" 
                fullWidth 
                sx={{
                  padding: '10px',
                  fontSize: '16px',
                  borderColor: '#2e7d32',
                  '&:hover': {
                    backgroundColor: '#2e7d32',
                    color: '#fff',
                  }
                }}
              >
                Share via Link
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CampaignReport;
