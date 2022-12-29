import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
//  import '../styles/Cats.css';

function Cats() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) navigate('/');
  }, []);

  return (
    <main id='cats-main'>
      <h1>Cats</h1>
    </main>
  );
}

export default Cats;
