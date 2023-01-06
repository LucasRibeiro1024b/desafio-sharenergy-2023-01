import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
import { Navbar, User } from '../components';
import { fetchApi, validateLoginLocalStorage } from '../utils';
import { mockUsers } from '../mocks';
import '../styles/Users.css';

function Users() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();
  const [startUser, setStartUser] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [endUser, setEndUser] = useState(startUser + resultsPerPage);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [typeFilter, setTypeFilter] = useState('name');
  const [filterUsers, setFilterUsers] = useState('');
  const [showUsers, setShowUsers] = useState(false);
  const BASE_URL = `https://randomuser.me/api/?seed=gabrielpinheiromatiucci&results=1000&nat=br&inc=picture,name,email,dob,login`;

  useEffect(() => {
    if (!(validateLoginLocalStorage() || logged)) navigate('/');    

    setShowUsers(false);
    //  setUsers([ ...users, ...mockUsers() ]);

    async function fetchData() {
      const payload = await fetchApi.get(BASE_URL);
      setUsers([...users, ...payload.results]);
    }

    fetchData();
  }, []);

  useEffect(() => { setEndUser(startUser + resultsPerPage); }, [resultsPerPage]);

  useEffect(() => {
    usersToShow();
    setStartUser(0);
    setEndUser(resultsPerPage);
  }, [filterUsers, typeFilter, users]);

  function handleClickPage(option) {
    if (option === 0) {
      if (startUser - resultsPerPage < 0) setStartUser(0);
      else setStartUser(startUser - resultsPerPage);

      if (endUser - resultsPerPage <= resultsPerPage) setEndUser(resultsPerPage);
      else setEndUser(endUser - resultsPerPage);

    } else {
      setStartUser(endUser);
      setEndUser(endUser + resultsPerPage);
    }
  }

  function filterUsersByName(name) {
    if (name.first.toLowerCase().includes(filterUsers)) return true;
    if (name.last.toLowerCase().includes(filterUsers)) return true;

    return false;
  }

  function filterUsersByUsername(username) {
    return username.toLowerCase().includes(filterUsers);
  }

  function filterUsersToShow(element) {
    if (filterUsers.trim() === '') return true;

    const { name, login: { username }, email } = element;

    if (typeFilter === 'name') return filterUsersByName(name);
    if (typeFilter === 'username') return filterUsersByUsername(username);

    return email.toLowerCase().includes(filterUsers);
  }

  function usersToShow() {
    setShowUsers(false);

    const filtered = users
      .filter(filterUsersToShow);

    setFilteredUsers(filtered);
    setShowUsers(true);
  }

  return (
    <main id='users-main'>
      <Navbar />
      <h1>Usuários</h1>
      <section id='users-pagination-filter'>
        <div id='users-pagination-filter-pagination'>
          <p>Usuários por página:&nbsp;</p>
          <select
            onChange={ ({ target }) => setResultsPerPage(parseInt(target.value)) }
            value={ resultsPerPage }
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>          
        </div>
        <div id='users-pagination-filter-filter'>
          <p>Filtrar usuários por:</p>
          <select
            onChange={ ({ target }) => setTypeFilter(target.value) }
            value={ typeFilter }
          >
            <option value="name">Nome</option>
            <option value="email">E-mail</option>
            <option value="username">Username</option>
          </select> 
          <input
            type="text"
            onChange={ ({ target }) => setFilterUsers(target.value) }
            value={ filterUsers }
          />
        </div>
      </section>
      { !showUsers && <h1>Loading...</h1> }
      <section id='users-container'>
        {
          showUsers && filteredUsers
            .slice(startUser, endUser)
            .map((user) => (
              <User
                user={ user }
                key={ `${user.username}-${user.email}-${user.dob.age}` }
              />
            ))
        }
      </section>
      <section id='users-buttons'>
        {
          startUser !== 0 &&
            <button type='button' onClick={ () => handleClickPage(0) }>
              Página anterior
            </button>
        }
        {
          endUser < filteredUsers.length &&
            <button type='button' onClick={ () => handleClickPage(1) }>
              Próxima página
            </button>
        }
      </section>
    </main>
  );
}

export default Users;
