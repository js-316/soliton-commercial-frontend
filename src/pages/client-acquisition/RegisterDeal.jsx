import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Box, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const activities = ['Meeting', 'Phone call', 'Email - Request for a meeting', 'Email - Sent'];
const stages = ['Meeting held', 'Requested - Quotations', 'Requested - Call Back', 'Requested - Meeting', 'Requested - Services of interest', 'Requested - Online Meeting', 'Requested - Proposal', 'Market Analysis'];
const outcomes = ['Prospectus', 'Pending', 'Positive', 'Neutral', 'Not interested'];
const followUps = ['Call back', 'Email - Sent', 'Requested - Meeting', 'Meeting - Set Date'];
const finalSteps = ['Closed', 'Pending - Promising', 'N/A'];

const RegisterDeal = () => {
  const [formData, setFormData] = useState({
    client: '',
    project: '',
    opportunity: '',
    email: '',
    phone: '',
    activity: '',
    stage: '',
    outcome: '',
    followUp: '',
    finalStep: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Register New Deal
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Client"
                name="client"
                value={formData.client}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Project/Opportunity"
                name="project"
                value={formData.project}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Opportunity"
                name="opportunity"
                value={formData.opportunity}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Activity</InputLabel>
                <Select
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                >
                  {activities.map((activity) => (
                    <MenuItem key={activity} value={activity}>
                      {activity}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Stage</InputLabel>
                <Select
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                >
                  {stages.map((stage) => (
                    <MenuItem key={stage} value={stage}>
                      {stage}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Outcome</InputLabel>
                <Select
                  name="outcome"
                  value={formData.outcome}
                  onChange={handleChange}
                >
                  {outcomes.map((outcome) => (
                    <MenuItem key={outcome} value={outcome}>
                      {outcome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Follow-up</InputLabel>
                <Select
                  name="followUp"
                  value={formData.followUp}
                  onChange={handleChange}
                >
                  {followUps.map((followUp) => (
                    <MenuItem key={followUp} value={followUp}>
                      {followUp}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Final Step</InputLabel>
                <Select
                  name="finalStep"
                  value={formData.finalStep}
                  onChange={handleChange}
                >
                  {finalSteps.map((finalStep) => (
                    <MenuItem key={finalStep} value={finalStep}>
                      {finalStep}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterDeal;