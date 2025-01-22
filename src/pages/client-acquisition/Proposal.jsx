import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const proposals = [
  {
    id: 1,
    proposal: 'Lwengo, Lyantonde Mityana, Wakiso and Kiryandogo Extension',
    client: 'NITA-Uganda',
    amount: '$44,876.00',
    additionalAmount: '$0.00',
    frequency: 'Monthly',
    probability: '99.83%',
    customer: 'NITA-Uganda',
    email: 'michael.ginyera@nita.go.ug',
    phone: '+256 41 7801038',
    productService: 'Salesperson',
    salesperson: 'Anjello Owor',
    expectedClosing: '[Expected Closing Date]',
    tags: '[Tags]',
    internalNotes: '[Internal Notes]',
    extraInformation: '[Extra Information]',
    quotation: {
      product: 'EXFO MAX730D (Dark fiber test 1310/1550 with VFL and Powermeter)',
      taxes: 'VAT 18%',
      units: 1,
      price: '$4,275.00',
      untaxedAmount: '$4,275.00',
      vat: '$769.50',
      total: '$5,044.50',
      comments: 'Payment is 100% upfront. Delivery is one day. 1 year warranty not subject to negligence. Quotation is valid for 30 days.',
    },
  },
  {
    id: 2,
    proposal: 'Fiber Optic Installation',
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
    quotation: {
      product: 'Fiber Optic Cable',
      taxes: 'VAT 18%',
      units: 10,
      price: '$1,200.00',
      untaxedAmount: '$12,000.00',
      vat: '$2,160.00',
      total: '$14,160.00',
      comments: 'Payment is 50% upfront. Delivery is two weeks. 2 years warranty. Quotation is valid for 60 days.',
    },
  },
  // Add more proposals as needed
];

const Proposal = () => {
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [open, setOpen] = useState(false);
  const [pipFiles, setPipFiles] = useState([]);
  const [surveyFiles, setSurveyFiles] = useState([]);
  const [quotationFiles, setQuotationFiles] = useState([]);
  const [otherFiles, setOtherFiles] = useState([]);

  const handleViewClick = (proposal) => {
    setSelectedProposal(proposal);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProposal(null);
  };

  const handleFileChange = (e, setFiles) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Proposals
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/dashboard/client-acquisition/proposal/create">
          Create New Quotation
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ marginBottom: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Proposal</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {proposals.map((proposal) => (
              <TableRow key={proposal.id}>
                <TableCell>{proposal.proposal}</TableCell>
                <TableCell>{proposal.client}</TableCell>
                <TableCell>{proposal.amount}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleViewClick(proposal)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button onClick={handleClose} color="primary">
              Back
            </Button>
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Proposal Details
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedProposal && (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Proposal</Typography>
                <Typography variant="body1">{selectedProposal.proposal}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Client</Typography>
                <Typography variant="body1">{selectedProposal.client}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Amount</Typography>
                <Typography variant="body1">{selectedProposal.amount}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Additional Amount</Typography>
                <Typography variant="body1">{selectedProposal.additionalAmount}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Frequency</Typography>
                <Typography variant="body1">{selectedProposal.frequency}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Probability</Typography>
                <Typography variant="body1">{selectedProposal.probability}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Customer</Typography>
                <Typography variant="body1">{selectedProposal.customer}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Email</Typography>
                <Typography variant="body1">{selectedProposal.email}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Phone</Typography>
                <Typography variant="body1">{selectedProposal.phone}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Product/Service</Typography>
                <Typography variant="body1">{selectedProposal.productService}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Salesperson</Typography>
                <Typography variant="body1">{selectedProposal.salesperson}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">Expected Closing</Typography>
                <Typography variant="body1">{selectedProposal.expectedClosing}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Tags</Typography>
                <Typography variant="body1">{selectedProposal.tags}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Internal Notes</Typography>
                <Typography variant="body1">{selectedProposal.internalNotes}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Extra Information</Typography>
                <Typography variant="body1">{selectedProposal.extraInformation}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Quotation</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell>Taxes</TableCell>
                        <TableCell>Units</TableCell>
                        <TableCell>Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>{selectedProposal.quotation.product}</TableCell>
                        <TableCell>{selectedProposal.quotation.taxes}</TableCell>
                        <TableCell>{selectedProposal.quotation.units}</TableCell>
                        <TableCell>{selectedProposal.quotation.price}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="body1">Untaxed Amount: {selectedProposal.quotation.untaxedAmount}</Typography>
                  <Typography variant="body1">VAT: {selectedProposal.quotation.vat}</Typography>
                  <Typography variant="body1">Total: {selectedProposal.quotation.total}</Typography>
                </Box>
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                  Comments: {selectedProposal.quotation.comments}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">PiP Request</Typography>
                <TextField
                  label="PiP Request"
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" component="label">
                  Upload PiP Document
                  <input type="file" multiple hidden onChange={(e) => handleFileChange(e, setPipFiles)} />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Survey Request</Typography>
                <TextField
                  label="Survey Request"
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" component="label">
                  Upload Survey Request 
                  <input type="file" multiple hidden onChange={(e) => handleFileChange(e, setSurveyFiles)} />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Quotation Document</Typography>
                <TextField
                  label="Quotation"
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" component="label">
                  Upload Quotation 
                  <input type="file" multiple hidden onChange={(e) => handleFileChange(e, setQuotationFiles)} />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Other Documents</Typography>
                <Button variant="contained" component="label">
                  Upload Other Documents
                  <input type="file" multiple hidden onChange={(e) => handleFileChange(e, setOtherFiles)} />
                </Button>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Proposal;