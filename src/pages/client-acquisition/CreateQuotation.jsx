import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CreateQuotation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    product: '',
    taxes: '',
    units: '',
    price: '',
    comments: '',
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
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Button variant="contained" color="secondary" onClick={() => navigate('/dashboard/client-acquisition/proposal')}>
          <ArrowBackIcon />
        </Button>
        <Typography variant="h4" gutterBottom sx={{ marginLeft: 2 }}>
          Create New Quotation
        </Typography>
      </Box>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Taxes"
                name="taxes"
                value={formData.taxes}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Units"
                name="units"
                value={formData.units}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
              />
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

export default CreateQuotation;