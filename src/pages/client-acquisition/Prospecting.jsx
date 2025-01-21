import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';

const Prospecting = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        New Deal / Opportunity
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Project</Typography>
            <Typography variant="body1">Supply of Drop fiber cable 2 core, Fiber Termination boxes indoor and Patch Panel 6 port</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Client</Typography>
            <Typography variant="body1">NRC</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Amount</Typography>
            <Typography variant="body1">$0.00</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Additional Amount</Typography>
            <Typography variant="body1">$0.00</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Frequency</Typography>
            <Typography variant="body1">Monthly</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Probability</Typography>
            <Typography variant="body1">99.96%</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Customer</Typography>
            <Typography variant="body1">Uganda Telecommunications Corporation Limited</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Email</Typography>
            <Typography variant="body1">procurement@utcl.co.ug</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Phone</Typography>
            <Typography variant="body1">+256 414 333616</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Product/Service</Typography>
            <Typography variant="body1">Salesperson</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Salesperson</Typography>
            <Typography variant="body1">Caroline Atukunda</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Expected Closing</Typography>
            <Typography variant="body1">[Expected Closing Date]</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Tags</Typography>
            <Typography variant="body1">[Tags]</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Internal Notes</Typography>
            <Typography variant="body1">[Internal Notes]</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Extra Information</Typography>
            <Typography variant="body1">[Extra Information]</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default Prospecting;