import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components';
import { Context } from '../contexts/Context';
import { validateLoginLocalStorage } from '../utils';
import '../styles/Cats.css';

function Cats() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();
  const [status, setStatus] = useState('100');
  //  const BASE_URL = `https://http.cat/${status}`;
  const BASE_URL = `${process.env.PUBLIC_URL}/100.jpg`;

  useEffect(() => {
    if (!(validateLoginLocalStorage() || logged)) navigate('/');
  }, []);

  function renderOptions() {
    const options = [];

    for (let i = 100; i <= 500; i += 100) {
      let j = 99;

      if (i === 100) j = 3;
      if (i === 200) j = 7;
      if (i === 300) j = 8;
      if (i === 400) j = 29;
      if (i === 500) j = 11;

      for (let k = 0; k <= j; k += 1) {
        options.push(<option key={ i + k } value={ i + k }>{ i + k }</option>);
      }
    }

    return options;
  }

  return (
    <main id='cats-main'>
      <Navbar />
      <h1>Cat HTTP Status</h1>
      <section id='cats-code-section'>
        <p>Code:</p>
        <select
          onChange={ ({ target }) => setStatus(target.value) }
          value={ status }
        >
          { renderOptions() }
          <option value="431">431</option>
          <option value="444">444</option>
          <option value="450">450</option>
          <option value="451">451</option>
          <option value="497">497</option>
          <option value="498">498</option>
          <option value="499">499</option>
          <option value="521">521</option>
          <option value="522">522</option>
          <option value="523">523</option>
          <option value="525">525</option>
          <option value="599">599</option>
        </select>        
      </section>
      <section id='cats-img-section'>
        <img src={ BASE_URL } alt="Image of HTTP status code based on cats actions." />
      </section>
    </main>
  );
}

export default Cats;
