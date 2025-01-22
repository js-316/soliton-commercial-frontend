import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const activities = ['Meeting', 'Phone call', 'Email - Request for a meeting', 'Email - Sent'];
const stages = ['Meeting held', 'Requested - Quotations', 'Requested - Call Back', 'Requested - Meeting', 'Requested - Services of interest', 'Requested - Online Meeting', 'Requested - Proposal', 'Market Analysis'];
const outcomes = ['Prospectus', 'Pending', 'Positive', 'Neutral', 'Not interested'];
const followUps = ['Call back', 'Email - Sent', 'Requested - Meeting', 'Meeting - Set Date'];
const finalSteps = ['Closed', 'Pending - Promising', 'N/A'];

const prospects = [
  {
    date: '08.08.24',
    prospect: 'Airtel Uganda',
    position: 'Network Director',
    contact: 'Jonathan Ssekyanzi',
    phone: '0700782783',
    opportunity: 'Supply of Drop fiber cable 2 core, Fiber Termination boxes',
    activity: 'Meeting',
    stage: 'Requested - Proposal',
    outcome: 'Pending',
    followUp: 'Meeting - Set Date',
    finalSteps: 'Pending - Promising',
  },
  // Add more prospects as needed
];

const Prospecting = () => {
  const [filters, setFilters] = useState({
    activity: '',
    stage: '',
    outcome: '',
    followUp: '',
    finalStep: '',
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredProspects = prospects.filter((prospect) => {
    return (
      (filters.activity === '' || prospect.activity === filters.activity) &&
      (filters.stage === '' || prospect.stage === filters.stage) &&
      (filters.outcome === '' || prospect.outcome === filters.outcome) &&
      (filters.followUp === '' || prospect.followUp === filters.followUp) &&
      (filters.finalStep === '' || prospect.finalSteps === filters.finalStep)
    );
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        New Deals / Opportunities
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/dashboard/client-acquisition/prospecting/register">
          Register New Deal
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Activity</InputLabel>
            <Select
              name="activity"
              value={filters.activity}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              {activities.map((activity) => (
                <MenuItem key={activity} value={activity}>
                  {activity}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Stage</InputLabel>
            <Select
              name="stage"
              value={filters.stage}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              {stages.map((stage) => (
                <MenuItem key={stage} value={stage}>
                  {stage}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Outcome</InputLabel>
            <Select
              name="outcome"
              value={filters.outcome}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              {outcomes.map((outcome) => (
                <MenuItem key={outcome} value={outcome}>
                  {outcome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Follow-up</InputLabel>
            <Select
              name="followUp"
              value={filters.followUp}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              {followUps.map((followUp) => (
                <MenuItem key={followUp} value={followUp}>
                  {followUp}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Final Step</InputLabel>
            <Select
              name="finalStep"
              value={filters.finalStep}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              {finalSteps.map((finalStep) => (
                <MenuItem key={finalStep} value={finalStep}>
                  {finalStep}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Prospect/Account</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Opportunity</TableCell>
              <TableCell>Activity</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Outcome</TableCell>
              <TableCell>Follow-up</TableCell>
              <TableCell>Final Steps</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProspects.map((prospect, index) => (
              <TableRow key={index}>
                <TableCell>{prospect.date}</TableCell>
                <TableCell>{prospect.prospect}</TableCell>
                <TableCell>{prospect.position}</TableCell>
                <TableCell>{prospect.contact}</TableCell>
                <TableCell>{prospect.phone}</TableCell>
                <TableCell>{prospect.opportunity}</TableCell>
                <TableCell>{prospect.activity}</TableCell>
                <TableCell>{prospect.stage}</TableCell>
                <TableCell>{prospect.outcome}</TableCell>
                <TableCell>{prospect.followUp}</TableCell>
                <TableCell>{prospect.finalSteps}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Prospecting;