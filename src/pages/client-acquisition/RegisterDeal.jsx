import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper, Box, MenuItem, Select, InputLabel, FormControl, Modal, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const activities = ['Meeting', 'Phone call', 'Email - Request for a meeting', 'Email - Sent'];
const stages = ['Meeting held', 'Requested - Quotations', 'Requested - Call Back', 'Requested - Meeting', 'Requested - Services of interest', 'Requested - Online Meeting', 'Requested - Proposal', 'Market Analysis'];
const outcomes = ['Prospectus', 'Pending', 'Positive', 'Neutral', 'Not interested'];
const followUps = ['Call back', 'Email - Sent', 'Requested - Meeting', 'Meeting - Set Date'];
const finalSteps = ['Closed', 'Pending - Promising', 'N/A'];

const initialClients = [
  { id: 1, name: 'Airtel Uganda', email: 'contact@airtel.ug', phone: '0700782783', contacts: [{ email: 'contact@airtel.ug', phone: '0700782783' }] },
  { id: 2, name: 'Savanna Fiber', email: 'contact@savannafiber.com', phone: '0784326789', contacts: [{ email: 'contact@savannafiber.com', phone: '0784326789' }] },
  // Add more existing clients as needed
];

const RegisterDeal = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState(initialClients);
  const [formData, setFormData] = useState({
    client: '',
    project: '',
    opportunity: '',
    email: '',
    phone: '',
    position: '',
    activity: '',
    stage: '',
    outcome: '',
    followUp: '',
    finalStep: '',
  });

  const [open, setOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    name: '',
    contacts: [{ email: '', phone: '' }],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClientChange = (e) => {
    const selectedClient = clients.find(client => client.id === e.target.value);
    if (selectedClient) {
      setFormData({
        ...formData,
        client: selectedClient.name,
        email: selectedClient.contacts[0].email,
        phone: selectedClient.contacts[0].phone,
      });
    }
  };

  const handleNewClientChange = (e) => {
    setNewClient({
      ...newClient,
      [e.target.name]: e.target.value,
    });
  };

  const handleNewContactChange = (index, e) => {
    const newContacts = newClient.contacts.map((contact, i) =>
      i === index ? { ...contact, [e.target.name]: e.target.value } : contact
    );
    setNewClient({
      ...newClient,
      contacts: newContacts,
    });
  };

  const handleAddNewContact = () => {
    setNewClient({
      ...newClient,
      contacts: [...newClient.contacts, { email: '', phone: '' }],
    });
  };

  const handleRemoveNewContact = (index) => {
    const newContacts = newClient.contacts.filter((_, i) => i !== index);
    setNewClient({
      ...newClient,
      contacts: newContacts,
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSaveNewClient = () => {
    const newClientId = clients.length + 1;
    const newClientData = { id: newClientId, ...newClient };
    setClients([...clients, newClientData]);
    setFormData({
      ...formData,
      client: newClientData.name,
      email: newClientData.contacts[0].email,
      phone: newClientData.contacts[0].phone,
    });
    setNewClient({ name: '', contacts: [{ email: '', phone: '' }] });
    handleClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Button variant="contained" color="secondary" onClick={() => navigate('/dashboard/client-acquisition/prospecting')}>
          Back
        </Button>
        <Typography variant="h4" gutterBottom sx={{ marginLeft: 2 }}>
          Register New Prospect
        </Typography>
      </Box>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Client</InputLabel>
                <Select
                  name="client"
                  value={formData.client}
                  onChange={handleClientChange}
                >
                  {clients.map((client) => (
                    <MenuItem key={client.id} value={client.id}>
                      {client.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Add New Client
              </Button>
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
                label="Position"
                name="position"
                value={formData.position}
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

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" gutterBottom>
            Register New Client
          </Typography>
          <TextField
            label="Client Name"
            name="name"
            value={newClient.name}
            onChange={handleNewClientChange}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <Typography variant="h6" gutterBottom>
            Contact Details
          </Typography>
          {newClient.contacts.map((contact, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={12} sm={5}>
                <TextField
                  label="Email"
                  name="email"
                  value={contact.email}
                  onChange={(e) => handleNewContactChange(index, e)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  label="Phone"
                  name="phone"
                  value={contact.phone}
                  onChange={(e) => handleNewContactChange(index, e)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={() => handleRemoveNewContact(index)} color="secondary">
                  <RemoveIcon />
                </IconButton>
                {index === newClient.contacts.length - 1 && (
                  <IconButton onClick={handleAddNewContact} color="primary">
                    <AddIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
            <Button variant="contained" color="primary" onClick={handleSaveNewClient}>
              Save Client
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default RegisterDeal;