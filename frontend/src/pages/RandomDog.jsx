import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components';
import { Context } from '../contexts/Context';
import { validateLoginLocalStorage } from '../utils';
//  import '../styles/RandomDog.css';

function RandomDog() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!(validateLoginLocalStorage() || logged)) navigate('/');
  }, []);

  return (
    <main id='random-dog-main'>
      <Navbar />
      <h1>Random dog</h1>
    </main>
  );
}

export default RandomDog;
