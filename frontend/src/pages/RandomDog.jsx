import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components';
import { Context } from '../contexts/Context';
import { validateLoginLocalStorage, fetchApi } from '../utils';
import '../styles/RandomDog.css';

function RandomDog() {
  const { logged } = useContext(Context);
  const navigate = useNavigate();
  const [imgURL, setImgURL] = useState('');
  const [loading, setLoading] = useState(true);
  const BASE_URL = `https://random.dog/woof.json`;

  useEffect(() => {
    if (!(validateLoginLocalStorage() || logged)) navigate('/');
  
    fetchData();
    //  setImgURL(`${process.env.PUBLIC_URL}/a433a374-775a-4815-8c72-15826db1f1ee.jpg`);
  }, []);
  
  async function fetchData() {
    setLoading(true);
    const payload = await fetchApi.get(BASE_URL);

    if (payload.url && !payload.url.endsWith('mp4')) setImgURL(payload.url);
    else fetchData();
    setLoading(false);
  }

  return (
    <main id='random-dog-main'>
      <Navbar />
      { loading && <h1>Loading...</h1> }
      <h1>Random dog</h1>
      <button type='button' onClick={ fetchData }>Refresh</button>
      <section id='random-dog-img-section'>
        <img src={ imgURL } alt="Image of a random dog." />
      </section>
    </main>
  );
}

export default RandomDog;
