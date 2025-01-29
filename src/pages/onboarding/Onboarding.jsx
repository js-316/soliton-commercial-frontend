import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Button, TextField, Checkbox, FormControlLabel, Select, MenuItem, InputLabel, FormControl, Modal, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const clients = [
  { id: 1, name: 'Airtel Uganda' },
  { id: 2, name: 'Savanna Fiber' },
  // Add more existing clients as needed
];

const initialProjects = [
  { id: 1, name: 'Project A' },
  { id: 2, name: 'Project B' },
  // Add more existing projects as needed
];

const Onboarding = () => {
  const [formData, setFormData] = useState({
    client: '',
    project: '',
    newProject: '',
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

  const [projects, setProjects] = useState(initialProjects);
  const [open, setOpen] = useState(false);
  const [newProject, setNewProject] = useState('');

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

  const handleDeleteProduct = (index) => {
    const newProducts = formData.products.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      products: newProducts,
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSaveNewProject = () => {
    const newProjectId = projects.length + 1;
    const newProjectData = { id: newProjectId, name: newProject };
    setProjects([...projects, newProjectData]);
    setFormData({
      ...formData,
      project: newProjectData.name,
    });
    setNewProject('');
    handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const calculateBalance = () => {
    const totalAmount = 93200; // Replace with actual total amount
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
              <FormControl fullWidth>
                <InputLabel>Client</InputLabel>
                <Select
                  name="client"
                  value={formData.client}
                  onChange={handleChange}
                >
                  {clients.map((client) => (
                    <MenuItem key={client.id} value={client.name}>
                      {client.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Project</InputLabel>
                <Select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                >
                  {projects.map((project) => (
                    <MenuItem key={project.id} value={project.name}>
                      {project.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Create New Project
              </Button>
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
            <Grid item xs={12} sm={6}>
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Paid Percentage</Typography>
              <FormControl fullWidth>
                <InputLabel>Paid Percentage</InputLabel>
                <Select
                  name="paidPercentage"
                  value={formData.paidPercentage}
                  onChange={handleChange}
                >
                  <MenuItem value={0}>0%</MenuItem>
                  <MenuItem value={25}>25%</MenuItem>
                  <MenuItem value={50}>50%</MenuItem>
                  <MenuItem value={75}>75%</MenuItem>
                  <MenuItem value={100}>100%</MenuItem>
                </Select>
                

              
            
              </FormControl>
              
              <Typography variant="body1" sx={{ mt: 2 }}>
                Balance: ${calculateBalance()}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Products</Typography>
              {formData.products.map((product, index) => (
                <Box key={index} display="flex" alignItems="center" mb={2}>
                  <TextField
                    label={`Product ${index + 1}`}
                    value={product}
                    onChange={(e) => handleProductChange(e, index)}
                    fullWidth
                  />
                  <IconButton onClick={() => handleDeleteProduct(index)} color="secondary" sx={{ ml: 2 }}>
                    <RemoveIcon />
                  </IconButton>
                </Box>
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

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Create New Project
          </Typography>
          <TextField
            label="Project Name"
            name="newProject"
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <Button variant="contained" color="primary" onClick={handleSaveNewProject}>
              Save Project
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default Onboarding;