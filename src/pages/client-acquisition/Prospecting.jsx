import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, MenuItem, Select, FormControl, InputLabel, Modal } from '@mui/material';
import { Link } from 'react-router-dom';

const activities = ['Meeting', 'Phone call', 'Email - Request for a meeting', 'Email - Sent'];
const stages = ['Meeting held', 'Requested - Quotations', 'Requested - Call Back', 'Requested - Meeting', 'Requested - Services of interest', 'Requested - Online Meeting', 'Requested - Proposal', 'Market Analysis'];
const outcomes = ['Prospectus', 'Pending', 'Positive', 'Neutral', 'Not interested'];
const followUps = ['Call back', 'Email - Sent', 'Requested - Meeting', 'Meeting - Set Date'];
const finalSteps = ['Closed', 'Pending - Promising', 'N/A'];

const initialProspects = [
  {
    id: 1,
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
  {
    id: 2,
    date: '16.08.24',
    prospect: 'Savanna Fiber',
    position: 'CTO Savanna Fibre',
    contact: 'Joash Omoke',
    phone: '0784326789',
    opportunity: 'Purchase of Splicing machines',
    activity: 'Meeting',
    stage: 'Requested - Quotations',
    outcome: 'Prospectus',
    followUp: 'Call back',
    finalSteps: 'Closed',
  },
  {
    id: 3,
    date: '20.08.24',
    prospect: 'Iway Africa',
    position: 'COO Iway Africa',
    contact: 'Christine',
    phone: '0772426274',
    opportunity: 'Purchase of 730D Dark fiber Test',
    activity: 'Phone call',
    stage: 'Requested - Call Back',
    outcome: 'Neutral',
    followUp: 'Meeting - Set Date',
    finalSteps: 'Pending - Promising',
  },
  {
    id: 4,
    date: '21.08.24',
    prospect: 'Canal box',
    position: 'COP',
    contact: 'Viken',
    phone: '0326106800',
    opportunity: 'Installation of CCTV',
    activity: 'Meeting',
    stage: 'Requested - Proposal',
    outcome: 'Positive',
    followUp: 'Email - Sent',
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

  const [prospects, setProspects] = useState(initialProspects);
  const [selectedProspect, setSelectedProspect] = useState(null);
  const [open, setOpen] = useState(false);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpen = (prospect) => {
    setSelectedProspect(prospect);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProspect(null);
  };

  const handleProspectChange = (e) => {
    const { name, value } = e.target;
    setSelectedProspect({
      ...selectedProspect,
      [name]: value,
    });
  };

  const handleSave = () => {
    setProspects((prevProspects) =>
      prevProspects.map((prospect) =>
        prospect.id === selectedProspect.id ? selectedProspect : prospect
      )
    );
    handleClose();
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
        New Prospects
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/dashboard/client-acquisition/prospecting/register">
          Register New Prospect
        </Button>
      </Box>
      <Grid container spacing={1} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} sm={6} md={2}>
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
        <Grid item xs={12} sm={6} md={2}>
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
        <Grid item xs={12} sm={6} md={2}>
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
        <Grid item xs={12} sm={6} md={2}>
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
        <Grid item xs={12} sm={6} md={2}>
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
              <TableCell>#</TableCell>
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
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProspects.map((prospect, index) => (
              <TableRow key={index}>
                <TableCell>{prospect.id}</TableCell>
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
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleOpen(prospect)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          {selectedProspect && (
            <>
              <Typography variant="h6" gutterBottom>
                Edit Prospect
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Activity</InputLabel>
                <Select
                  name="activity"
                  value={selectedProspect.activity}
                  onChange={handleProspectChange}
                >
                  {activities.map((activity) => (
                    <MenuItem key={activity} value={activity}>
                      {activity}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Stage</InputLabel>
                <Select
                  name="stage"
                  value={selectedProspect.stage}
                  onChange={handleProspectChange}
                >
                  {stages.map((stage) => (
                    <MenuItem key={stage} value={stage}>
                      {stage}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Outcome</InputLabel>
                <Select
                  name="outcome"
                  value={selectedProspect.outcome}
                  onChange={handleProspectChange}
                >
                  {outcomes.map((outcome) => (
                    <MenuItem key={outcome} value={outcome}>
                      {outcome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Follow-up</InputLabel>
                <Select
                  name="followUp"
                  value={selectedProspect.followUp}
                  onChange={handleProspectChange}
                >
                  {followUps.map((followUp) => (
                    <MenuItem key={followUp} value={followUp}>
                      {followUp}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Final Step</InputLabel>
                <Select
                  name="finalSteps"
                  value={selectedProspect.finalSteps}
                  onChange={handleProspectChange}
                >
                  {finalSteps.map((finalStep) => (
                    <MenuItem key={finalStep} value={finalStep}>
                      {finalStep}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Prospecting;