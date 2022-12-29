import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
//  import '../styles/RandomDog.css';

function RandomDog() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) navigate('/');
  }, []);

  return (
    <main id='random-dog-main'>
      <h1>Random dog</h1>
    </main>
  );
}

export default RandomDog;
