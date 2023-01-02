import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
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
      <h1>Cats</h1>
    </main>
  );
}

export default Cats;
