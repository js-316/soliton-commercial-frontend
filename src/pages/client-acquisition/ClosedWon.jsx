import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';

const ClosedWon = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Closed Deals
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Project</Typography>
            <Typography variant="body1">Repair of an FSM 90S+ machine and Cleaver</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Client</Typography>
            <Typography variant="body1">NRC</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Amount</Typography>
            <Typography variant="body1">$282.40</Typography>
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
            <Typography variant="body1">99.88%</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Customer</Typography>
            <Typography variant="body1">Seagate Electric</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Email</Typography>
            <Typography variant="body1">nanjobem@seagate-electric.co.ug</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Phone</Typography>
            <Typography variant="body1">0772017141</Typography>
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
            <Typography variant="body1">
              Will be repaired after client confirmation.
              <br />
              The client confirmed only repair of the splicer.
              <br />
              Payment was made, repairs ongoing.
              <br />
              The splicing machine was picked on 10th/12/2024 with the cleaver not repaired.
            </Typography>
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

export default ClosedWon;