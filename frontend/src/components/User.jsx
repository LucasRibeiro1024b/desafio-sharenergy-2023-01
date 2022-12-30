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
        <p>Nome: { `${first} ${last}` } </p>
        <p>E-mail: { email } </p>
        <p>Username: { username } </p>
        <p>Idade: { age } </p>
      </section>
    </section>
  );
}

export default User;
