import React from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material';

function Product() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          12U 600*600 Wall Mountable Rack
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Can be Sold | Can be Purchased
        </Typography>
        <Divider />
        <Grid container spacing={2} style={{ marginTop: '16px' }}>
          <Grid item xs={12}>
            <Typography variant="h6">General Information</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Product Type:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Service</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Invoicing Policy:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Prepaid/Fixed Price</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Create on Order:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Nothing</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Invoice ordered quantities as soon as this service is sold.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Unit of Measure:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Piece</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Purchase UoM:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Piece</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Create Repair:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Sales Price:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">$220.00</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Customer Taxes:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Cost:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">$0.00 per Piece</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Product Category:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">All</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Internal Reference:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Barcode:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Product Template Tags:</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Product;