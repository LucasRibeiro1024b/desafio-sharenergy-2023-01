import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
import '../styles/Users.css';

function Users() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const BASE_URL = `https://randomuser.me/api/?seed=gabrielpinheiromatiucci&page=${page}&results=10&nat=br&inc=picture,name,email,dob,login`;

  useEffect(() => {
    if (!logged) navigate('/');
  }, []);

  return (
    <main id='users-main'>
      <h1>Users</h1>
    </main>
  );
}

export default Users;
