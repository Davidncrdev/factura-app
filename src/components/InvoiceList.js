import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

const InvoiceList = ({ invoices }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Invoices
      </Typography>
      {invoices.map((invoice, index) => (
        <Card key={index} variant="outlined" style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h6">
              Invoice {index + 1}
            </Typography>
            <Typography>
              Customer: {invoice.customer}
            </Typography>
            <Typography>
              Date: {invoice.date}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Items:
            </Typography>
            <Grid container spacing={2}>
              {invoice.items.map((item, idx) => (
                <Grid item xs={12} key={idx}>
                  <Typography>
                    {item.description} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Typography variant="h6" style={{ marginTop: '10px' }}>
              Total: ${invoice.total}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default InvoiceList;
