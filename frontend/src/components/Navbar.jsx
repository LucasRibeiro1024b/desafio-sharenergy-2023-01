import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav id='navbar'>
      <button
        type='button'
        onClick={ () => navigate('/users') }
      >
        Users
      </button>
      <button
        type='button'
        onClick={ () => navigate('/cats') }
      >
        HTTP Cats
      </button>
      <button
        type='button'
        onClick={ () => navigate('/dogs') }
      >
        Random Dog
      </button>
      <button
        type='button'
        onClick={ () => navigate('/clients') }
      >
        Clients
      </button>
    </nav>
  );
}

export default Navbar;
