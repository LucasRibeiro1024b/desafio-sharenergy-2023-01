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

export default {
  get,
};
