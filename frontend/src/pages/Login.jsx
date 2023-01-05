import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
import { localStorage, validateLoginLocalStorage } from '../utils';
import '../styles/Login.css';

const {
  REACT_APP_USERNAME,
  REACT_APP_PASSWORD,
  REACT_APP_KEY_LOCAL_STORAGE,
} = process.env;

function Login() {
  const { logged, setLogged } = useContext(Context);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [validCredentials, setValidCredentials] = useState(true);  

  useEffect(() => { if (validateLoginLocalStorage()) navigate('/users') }, []);

  function handleClick() {
    if (rememberMe) {
      localStorage.setItem(REACT_APP_KEY_LOCAL_STORAGE, { username, password });
    }

    if (username === REACT_APP_USERNAME && password === REACT_APP_PASSWORD) {
      setLogged(true);
      setValidCredentials(true);
      navigate('/users');
    } else {
      setLogged(false);
      setValidCredentials(false);
    }
  }

  return (
    <main id='form-main'>
      <h1>Login</h1>
      { !validCredentials && <h2>Credenciais inválidas</h2>}
      <form>
        <section className="form-section">
          <label>Username&nbsp;&nbsp;</label>
          <div>
            <input
              type="text"
              size="50"
              name="username"
              placeholder="Sharenergy"
              value={ username }
              onChange={ ({ target }) => setUsername(target.value) }
            />
          </div>
        </section>
        <section className="form-section">
          <label>Password&nbsp;&nbsp;</label>
          <div>
            <input
              type="password"
              size="50"
              name="password"
              placeholder="123456"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </div>
        </section>
        <section className="rememberMe-section">
          <input
            type="checkbox"
            name="rememberMe"
            value={ rememberMe }
            onChange={ () => setRememberMe(!rememberMe) }
          />
          <p>remember me</p>
        </section>
        <section>
          <br/>
          <button type="button" onClick={ handleClick }>Entrar</button>
        </section>
      </form>
    </main>
  );
}

export default Login;
