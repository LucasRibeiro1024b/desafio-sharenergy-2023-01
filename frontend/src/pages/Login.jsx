import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../contexts/Context';
import { localStorage } from '../utils';
import '../styles/Login.css';

const KEY_LOCAL_STORAGE = 'remembered';

function Login() {
  const { logged, setLogged } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [validCredentials, setValidCredentials] = useState(true);  

  useState(() => {
    const { REACT_APP_USERNAME, REACT_APP_PASSWORD } = process.env;
    const remembered = localStorage.getItem(KEY_LOCAL_STORAGE);
    
    if (remembered) {
      setValidCredentials(true);
      const { username: user, password: pass } = remembered;

      if (user === REACT_APP_USERNAME && pass === REACT_APP_PASSWORD) {
        setLogged(true);
      } else {
        setLogged(false);
      }
    }
  }, []);

  function handleClick() {
    const { REACT_APP_USERNAME, REACT_APP_PASSWORD } = process.env;

    if (rememberMe) {
      localStorage.setItem(KEY_LOCAL_STORAGE, { username, password });
    }

    if (username === REACT_APP_USERNAME && password === REACT_APP_PASSWORD) {
      setValidCredentials(true);
      setLogged(true);
    } else {
      setValidCredentials(false);
      setLogged(false);
    }
  }

  return (
    <main id='form-main'>
      { logged && <Navigate to="/users" replace={ true } /> }
      <h1>Login</h1>
      { !validCredentials && <h2>Invalid credentials</h2>}
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
