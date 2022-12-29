import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
import '../styles/Login.css';

function Login() {
  const { logged, setLogged } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChange({ target }) {
    if (target.name === 'username') setUsername(target.value);
    else setPassword(target.value);
  }

  function handleClick() {
    console.log("Clicou");
  }

  return (
    <main id='form-main'>
      { logged && <Navigate to="/users" replace={ true } /> }
      <form>
        <section className="form-section">
          <label>Username:&nbsp;</label>
          <div>
            <input
              type="text"
              size="50"
              name="username"
              placeholder="Sharenergy"
              value={ username }
              onChange={ handleChange }
            />
          </div>
        </section>
        <section className="form-section">
          <label>Password:&nbsp;</label>
          <div>
            <input
              type="password"
              size="50"
              name="password"
              placeholder="123456"
              value={ password }
              onChange={ handleChange }
            />
          </div>
        </section>
        <section>
          <br/>
          <button type="button" onClick={ handleClick }>Adicionar</button>
        </section>
      </form>
    </main>
  );
}

export default Login;
