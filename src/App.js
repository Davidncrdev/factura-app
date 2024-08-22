// src/App.js
import React, { useEffect, useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import InvoiceForm from './components/InvoiceForm';
import InvoiceList from './components/InvoiceList';
import AuthButtons from './components/AuthButtons';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Container, Button } from '@mui/material';

const App = () => {
  const [user, setUser] = useState(null);
  const [invoices, setInvoices] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setShowLogin(false);
      setShowSignup(false);
    });
    return () => unsubscribe();
  }, []);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  return (
    <Container>
      <h1>Invoice Manager</h1>
      {user ? (
        <>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
          <InvoiceForm addInvoice={addInvoice} />
          <InvoiceList invoices={invoices} />
        </>
      ) : (
        <>
          {showLogin && <Login />}
          {showSignup && <Signup />}
          {!showLogin && !showSignup && (
            <AuthButtons
              onLoginClick={handleLoginClick}
              onSignupClick={handleSignupClick}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default App;
