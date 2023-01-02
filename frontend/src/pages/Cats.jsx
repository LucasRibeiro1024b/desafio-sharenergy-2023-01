import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components';
import { Context } from '../contexts/Context';
import { validateLoginLocalStorage } from '../utils';
//  import '../styles/Cats.css';

function Cats() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!(validateLoginLocalStorage() || logged)) navigate('/');
  }, []);

  return (
    <main id='cats-main'>
      <Navbar />
      <h1>Cats</h1>
    </main>
  );
}

export default Cats;
