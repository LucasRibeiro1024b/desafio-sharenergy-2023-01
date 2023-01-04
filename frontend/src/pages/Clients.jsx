import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Client } from '../components';
import { Context } from '../contexts/Context';
import { validateLoginLocalStorage, fetchApi } from '../utils';
import '../styles/Clients.css';

function Clients() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [startClient, setStartClient] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const [endClient, setEndClient] = useState(startClient + resultsPerPage);
  const GET_URL = 'http://localhost:3001/clients';

  useEffect(() => {
    if (!(validateLoginLocalStorage() || logged)) navigate('/');

    fetchData();
  }, []);

  useEffect(() => { setEndClient(startClient + resultsPerPage); }, [resultsPerPage]);

  useEffect(() => { setStartClient(0); setEndClient(resultsPerPage); }, [clients]);

  async function fetchData() {
    const payload = await fetchApi.get(GET_URL);

    setClients(payload);
  }

  function handleClickPage(option) {
    if (option === 0) {
      if (startClient - resultsPerPage < 0) setStartClient(0);
      else setStartClient(startClient - resultsPerPage);

      if (endClient - resultsPerPage <= resultsPerPage) setEndClient(resultsPerPage);
      else setEndClient(endClient - resultsPerPage);

    } else {
      setStartClient(endClient);
      setEndClient(endClient + resultsPerPage);
    }
  }

  return (
    <main id='clients-main'>
      <Navbar />
      <h1>Clientes</h1>
      <section id='clients-pagination-filter'>
        <p>Clientes por página:&nbsp;</p>
        <select
          onChange={ ({ target }) => setResultsPerPage(parseInt(target.value)) }
          value={ resultsPerPage }
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>          
      </section>
      <section id='clients-container'>
        {
          clients
            .slice(startClient, endClient)
            .map((client) => (
              <Client
                client={ client }
                key={ client._id }
              />
            ))
        }
      </section>
      <section id='clients-buttons'>
        {
          startClient !== 0 &&
            <button type='button' onClick={ () => handleClickPage(0) }>
              Página anterior
            </button>
        }
        {
          endClient < clients.length &&
            <button type='button' onClick={ () => handleClickPage(1) }>
              Próxima página
            </button>
        }
      </section>
    </main>
  );
}

export default Clients;
