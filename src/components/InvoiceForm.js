import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const InvoiceForm = ({ addInvoice }) => {
  const [customer, setCustomer] = useState('');
  const [date, setDate] = useState('');
  const [items, setItems] = useState([{ description: '', quantity: 0, price: 0 }]);

  const handleAddItem = () => {
    setItems([...items, { description: '', quantity: 0, price: 0 }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvoice = {
      customer,
      date,
      items,
      total: items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    };
    addInvoice(newInvoice);
    setCustomer('');
    setDate('');
    setItems([{ description: '', quantity: 0, price: 0 }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Create Invoice
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Customer Name"
            variant="outlined"
            fullWidth
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Date"
            type="date"
            variant="outlined"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Items
          </Typography>
          {items.map((item, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={4}>
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  value={item.description}
                  onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Quantity"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  label="Price"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={item.price}
                  onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                  required
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12}>
          <IconButton color="primary" onClick={handleAddItem}>
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Create Invoice
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default InvoiceForm;
