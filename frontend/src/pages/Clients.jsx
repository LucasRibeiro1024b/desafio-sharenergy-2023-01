import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
//  import '../styles/Clients.css';

function Clients() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) navigate('/');
  }, []);

  return (
    <main id='clients-main'>
      <h1>Clients</h1>
    </main>
  );
}

export default Clients;
