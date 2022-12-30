import React from 'react';

function User({ user }) {
  const {
    picture: { large },
    name: { first, last },
    email,
    login: { username },
    dob: { age },
  } = user;

  return (
    <section className="user-section">
      <img src={ large } alt="Photo of the user" />
      <section className="user-info">
        <h2>Nome: { `${first} ${last}` } </h2>
        <h2>E-mail: { email } </h2>
        <h2>Username: { username } </h2>
        <h2>Idade: { age } </h2>
      </section>
    </section>
  );
}

export default User;
