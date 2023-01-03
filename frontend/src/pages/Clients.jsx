import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components';
import { Context } from '../contexts/Context';
import { validateLoginLocalStorage } from '../utils';
import '../styles/Clients.css';

function Clients() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!(validateLoginLocalStorage() || logged)) navigate('/');
  }, []);

  return (
    <main id='clients-main'>
      <Navbar />
      <h1>Clients</h1>
    </main>
  );
}

export default Clients;
