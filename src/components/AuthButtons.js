// src/components/AuthButtons.js
import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const AuthButtons = ({ onLoginClick, onSignupClick }) => {
  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h4">Bienvenido a Invoice Manager</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={onLoginClick}>
          Iniciar Sesión
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="secondary" onClick={onSignupClick}>
          Crear Cuenta
        </Button>
      </Grid>
    </Grid>
  );
};

export default AuthButtons;
