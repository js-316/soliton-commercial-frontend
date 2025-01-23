import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Button, TextField, Checkbox, FormControlLabel, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const Onboarding = () => {
  const [clientExists, setClientExists] = useState(false);
  const [formData, setFormData] = useState({
    client: '',
    project: '',
    signedContract: null,
    signedContractStatus: false,
    directive: '',
    directiveStatus: false,
    lpo: null,
    paymentTerms: '',
    paymentStatus: 'Pending',
    paidPercentage: 0,
    products: [],
    revenue: 'MRC',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.files[0],
    });
  };

  const handleCheckboxChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.checked,
    });
  };

  const handleAddProduct = () => {
    setFormData({
      ...formData,
      products: [...formData.products, ''],
    });
  };

  const handleProductChange = (e, index) => {
    const newProducts = formData.products.map((product, i) =>
      i === index ? e.target.value : product
    );
    setFormData({
      ...formData,
      products: newProducts,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const calculateBalance = () => {
    const totalAmount = 100; // Replace with actual total amount
    const paidAmount = (totalAmount * formData.paidPercentage) / 100;
    return totalAmount - paidAmount;
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Onboarding
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={clientExists}
                    onChange={(e) => setClientExists(e.target.checked)}
                  />
                }
                label="Client already exists"
              />
            </Grid>
            {!clientExists && (
              <Grid item xs={12}>
                <TextField
                  label="Client"
                  name="client"
                  value={formData.client}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                label="Project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Signed Contract (Optional)</Typography>
              <Button variant="contained" component="label">
                Upload Signed Contract
                <input type="file" hidden onChange={(e) => handleFileChange(e, 'signedContract')} />
              </Button>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.signedContractStatus}
                    onChange={(e) => handleCheckboxChange(e, 'signedContractStatus')}
                  />
                }
                label="Signed Contract Status"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Directive CEO/CCO (Optional)</Typography>
              <TextField
                label="Directive"
                name="directive"
                value={formData.directive}
                onChange={handleChange}
                fullWidth
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.directiveStatus}
                    onChange={(e) => handleCheckboxChange(e, 'directiveStatus')}
                  />
                }
                label="Directive Status"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">LPO (Optional)</Typography>
              <TextField
                label="LPO"
                name="lpo"
                value={formData.lpo}
                onChange={handleChange}
                fullWidth
              />
              <Button variant="contained" component="label">
                Upload LPO Document
                <input type="file" hidden onChange={(e) => handleFileChange(e, 'lpo')} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Payment Terms</Typography>
              <TextField
                label="Payment Terms (%)"
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Payment Status</Typography>
              <FormControl fullWidth>
                <InputLabel>Payment Status</InputLabel>
                <Select
                  name="paymentStatus"
                  value={formData.paymentStatus}
                  onChange={handleChange}
                >
                  <MenuItem value="Paid">Paid</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Paid Percentage"
                name="paidPercentage"
                type="number"
                value={formData.paidPercentage}
                onChange={handleChange}
                fullWidth
                required
              />
              <Typography variant="body1">
                Balance: ${calculateBalance()}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Products</Typography>
              {formData.products.map((product, index) => (
                <TextField
                  key={index}
                  label={`Product ${index + 1}`}
                  value={product}
                  onChange={(e) => handleProductChange(e, index)}
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
              ))}
              <Button variant="contained" onClick={handleAddProduct}>
                Add Product
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Revenue</Typography>
              <FormControl fullWidth>
                <InputLabel>Revenue</InputLabel>
                <Select
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                >
                  <MenuItem value="MRC">MRC (Monthly)</MenuItem>
                  <MenuItem value="NRC">NRC (One-time)</MenuItem>
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

export default Onboarding;