import localStorage from './localStorage';

function validateLoginLocalStorage() {
  const {
    REACT_APP_USERNAME,
    REACT_APP_PASSWORD,
    REACT_APP_KEY_LOCAL_STORAGE,
  } = process.env;

  const data = localStorage.getItem(REACT_APP_KEY_LOCAL_STORAGE);
  
  if (data) {
    const { username: user, password: pass } = data;

    if (user === REACT_APP_USERNAME && pass === REACT_APP_PASSWORD) {
      return true;
    }
  }

  return false;
}

export default validateLoginLocalStorage;
