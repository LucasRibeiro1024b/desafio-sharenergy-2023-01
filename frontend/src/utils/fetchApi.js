async function get(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    if (response.ok) return json;
  } catch (err) {
    console.error(err);
  }
  return [];
}

async function post(url, data) {
  const payload = JSON.stringify(data);
  const myHeader = new Headers();

  myHeader.append('Content-Type', 'application/json');

  try {
    const response = await fetch(
      url,
      { method: 'POST', body: payload, headers: myHeader },
    );

    if (response.status === 201) return true;
    return false;

  } catch (error) {
    console.error(error);
    return false
  }
}

export default {
  get,
  post,
};
