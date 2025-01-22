import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, MenuItem, Select, FormControl, InputLabel, Checkbox, FormControlLabel } from '@mui/material';

const statuses = [
  'Initial Contact',
  'Proposal Sent',
  'Negotiation Ongoing',
  'Pending',
  'Won',
  'Closed',
  'Lost',
];

const initialProspects = [
  {
    id: 1,
    project: 'Repair and Servicing of a FSM 41S+',
    client: 'NRC',
    amount: '$195.00',
    additionalAmount: '$0.00',
    frequency: 'Monthly',
    probability: '99.88%',
    customer: 'Uganda Telecommunications Corporation Limited',
    email: 'procurement@utcl.co.ug',
    phone: '+256 414 333616',
    productService: 'Salesperson',
    salesperson: 'Caroline Atukunda',
    expectedClosing: '[Expected Closing Date]',
    tags: '[Tags]',
    internalNotes: '[Internal Notes]',
    extraInformation: '[Extra Information]',
    status: 'Initial Contact',
  },
  {
    id: 2,
    project: 'Fiber Optic Installation',
    client: 'Airtel Uganda',
    amount: '$12,000.00',
    additionalAmount: '$500.00',
    frequency: 'One-time',
    probability: '85.00%',
    customer: 'Airtel Uganda',
    email: 'contact@airtel.co.ug',
    phone: '+256 41 7801039',
    productService: 'Installation',
    salesperson: 'John Doe',
    expectedClosing: '2023-12-01',
    tags: 'Fiber, Installation',
    internalNotes: 'Urgent project',
    extraInformation: 'Requires special equipment',
    status: 'Proposal Sent',
  },
  // Add more prospects as needed
];

const Negotiations = () => {
  const [filter, setFilter] = useState('');
  const [prospects, setProspects] = useState(initialProspects);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleStatusChange = (id, status) => {
    setProspects((prevProspects) =>
      prevProspects.map((prospect) =>
        prospect.id === id ? { ...prospect, status } : prospect
      )
    );
  };

  const filteredProspects = filter
    ? prospects.filter((prospect) => prospect.status === filter)
    : prospects;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Negotiations
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Status</InputLabel>
          <Select value={filter} onChange={handleFilterChange}>
            <MenuItem value="">All</MenuItem>
            {statuses.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Prospect</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Amount</TableCell>
              {statuses.map((status) => (
                <TableCell key={status}>{status}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProspects.map((prospect) => (
              <TableRow key={prospect.id}>
                <TableCell>{prospect.id}</TableCell>
                <TableCell>{prospect.project}</TableCell>
                <TableCell>{prospect.client}</TableCell>
                <TableCell>{prospect.amount}</TableCell>
                {statuses.map((status) => (
                  <TableCell key={status}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={prospect.status === status}
                          onChange={() => handleStatusChange(prospect.id, status)}
                        />
                      }
                      label=""
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Negotiations;