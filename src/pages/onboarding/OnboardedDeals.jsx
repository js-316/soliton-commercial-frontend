import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, FormControlLabel, Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';

const onboardedDeals = [
  {
    id: 1,
    client: 'NITA-Uganda',
    project: 'Lwengo, Lyantonde Mityana, Wakiso and Kiryandogo Extension',
    signedContractStatus: true,
    directiveStatus: false,
    lpoStatus: true,
    paymentTerms: '50%',
    paymentStatus: 'Pending',
    paidPercentage: 50,
    products: ['Dark fiber', 'Extensions'],
    revenue: 'MRC',
  },
  {
    id: 2,
    client: 'Airtel Uganda',
    project: 'Fiber Optic Installation',
    signedContractStatus: false,
    directiveStatus: true,
    lpoStatus: false,
    paymentTerms: '100%',
    paymentStatus: 'Paid',
    paidPercentage: 100,
    products: ['Relocation'],
    revenue: 'NRC',
  },
  // Add more onboarded deals as needed
];

const OnboardedDeals = () => {
  const [deals, setDeals] = useState(onboardedDeals);
  const [filters, setFilters] = useState({
    client: '',
    project: '',
    signedContractStatus: '',
    directiveStatus: '',
    lpoStatus: '',
    paymentStatus: '',
    revenue: '',
  });

  const handleCheckboxChange = (id, field) => {
    setDeals((prevDeals) =>
      prevDeals.map((deal) =>
        deal.id === id ? { ...deal, [field]: !deal[field] } : deal
      )
    );
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredDeals = deals.filter((deal) => {
    return (
      (filters.client === '' || deal.client.includes(filters.client)) &&
      (filters.project === '' || deal.project.includes(filters.project)) &&
      (filters.signedContractStatus === '' || deal.signedContractStatus === (filters.signedContractStatus === 'true')) &&
      (filters.directiveStatus === '' || deal.directiveStatus === (filters.directiveStatus === 'true')) &&
      (filters.lpoStatus === '' || deal.lpoStatus === (filters.lpoStatus === 'true')) &&
      (filters.paymentStatus === '' || deal.paymentStatus === filters.paymentStatus) &&
      (filters.revenue === '' || deal.revenue === filters.revenue)
    );
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Clients On Board
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginBottom: 3 }}>
        <TextField
          label="Client"
          name="client"
          value={filters.client}
          onChange={handleFilterChange}
          fullWidth
          sx={{ flex: '1 1 200px' }}
        />
        <TextField
          label="Project"
          name="project"
          value={filters.project}
          onChange={handleFilterChange}
          fullWidth
          sx={{ flex: '1 1 200px' }}
        />
        <FormControl fullWidth sx={{ flex: '1 1 200px' }}>
          <InputLabel>Signed Contract</InputLabel>
          <Select
            name="signedContractStatus"
            value={filters.signedContractStatus}
            onChange={handleFilterChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ flex: '1 1 200px' }}>
          <InputLabel>Directive CEO/CCO</InputLabel>
          <Select
            name="directiveStatus"
            value={filters.directiveStatus}
            onChange={handleFilterChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ flex: '1 1 200px' }}>
          <InputLabel>LPO</InputLabel>
          <Select
            name="lpoStatus"
            value={filters.lpoStatus}
            onChange={handleFilterChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ flex: '1 1 200px' }}>
          <InputLabel>Payment Status</InputLabel>
          <Select
            name="paymentStatus"
            value={filters.paymentStatus}
            onChange={handleFilterChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Paid">Paid</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ flex: '1 1 200px' }}>
          <InputLabel>Revenue</InputLabel>
          <Select
            name="revenue"
            value={filters.revenue}
            onChange={handleFilterChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="MRC">MRC (Monthly)</MenuItem>
            <MenuItem value="NRC">NRC (One-time)</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Signed Contract</TableCell>
              <TableCell>Directive CEO/CCO</TableCell>
              <TableCell>LPO</TableCell>
              <TableCell>Payment Terms</TableCell>
              <TableCell>Payment Status</TableCell>
              <TableCell>Paid Percentage</TableCell>
              <TableCell>Products</TableCell>
              <TableCell>Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDeals.map((deal) => (
              <TableRow key={deal.id}>
                <TableCell>{deal.client}</TableCell>
                <TableCell>{deal.project}</TableCell>
                <TableCell>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={deal.signedContractStatus}
                        onChange={() => handleCheckboxChange(deal.id, 'signedContractStatus')}
                      />
                    }
                    label=""
                  />
                </TableCell>
                <TableCell>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={deal.directiveStatus}
                        onChange={() => handleCheckboxChange(deal.id, 'directiveStatus')}
                      />
                    }
                    label=""
                  />
                </TableCell>
                <TableCell>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={deal.lpoStatus}
                        onChange={() => handleCheckboxChange(deal.id, 'lpoStatus')}
                      />
                    }
                    label=""
                  />
                </TableCell>
                <TableCell>{deal.paymentTerms}</TableCell>
                <TableCell>{deal.paymentStatus}</TableCell>
                <TableCell>{deal.paidPercentage}%</TableCell>
                <TableCell>{deal.products.join(', ')}</TableCell>
                <TableCell>{deal.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default OnboardedDeals;