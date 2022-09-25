import React, { useState } from "react";
import './Registration.css';

const Registration = () => {
    const [user, setUser] = useState({
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
  
    const handleChangeEmail = (event) => {
      const emailInput = event.target.value;
      if (user.username === '' && emailInput.includes('@')) {
        const userName = emailInput.slice(0, [emailInput.indexOf('@')]);
        setUser({ ...user, username: userName });
      } else if (user.username !== '' && !emailInput.includes('@')) {
        setUser({ ...user, username: '' });
      }
    };
  
    const handleInput = (event) => {
      event.preventDefault();
      console.log(user);
    };
  
    return (
      <form className="form" onClick={handleInput}>
        <input
          className="form__input"
          placeholder="Email Adress"
          onChange={(event) => {
            setUser({ ...user, email: event.target.value });
            handleChangeEmail(event);
          }}
          type="email"
        />
        <input
          className="form__input"
          value={user.username}
          placeholder="Username"
          onChange={(event) => {
            setUser({ ...user, username: event.target.value });
          }}
          type="text"
        />
        <input
          className="form__input"
          placeholder="Password"
          onChange={(event) => setUser({ ...user, password: event.target.value })}
          type="password"
        />
        <input
          className="form__input"
          placeholder="Confirm Password"
          onChange={(event) =>
            setUser({ ...user, passwordConfirm: event.target.value })
          }
          type="password"
        />
        <button type="submit">Register</button>
      </form>
    );
  };

export default Registration;