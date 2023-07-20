import React, { useState } from 'react';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState({});
  const [loginDetail, setLoginDetail] = useState('');
  const [passwordDetail, setPassswordDetail] = useState('');

  const database = {
    username: 'admin',
    password: 'pass',
  };

  const errors = {
    uname: 'Invalid username',
    pass: 'invalid password',
  };

  const onLoginClick = evt => {
    evt.preventDefault();

    if (loginDetail) {
      if (loginDetail !== database.username) {
        // Invalid password
        setErrorMessage({ name: 'uname', message: errors.uname });
      } else if (passwordDetail !== database.password) {
        // Username not found
        setErrorMessage({ name: 'pass', message: errors.pass });
      } else {
        window.location.assign('/');
      }
    }
  };

  const renderErrorMessage = name =>
    name === errorMessage.name && <div className='error'>{errorMessage.message}</div>;

  return (
    <section className={styles.loginPage}>
      <form onSubmit={onLoginClick} className={styles.loginPage__form}>
        <label htmlFor='email'>Username</label>
        <input
          onChange={e => setLoginDetail(e.target.value)}
          type='text'
          name='uname'
          required
        />
        {renderErrorMessage('uname')}

        <label htmlFor='email'>Password</label>
        <input
          onChange={e => setPassswordDetail(e.target.value)}
          type='password'
          name='pass'
          required
        />
        {renderErrorMessage('pass')}
        <p>
          Forgot password? <a href='#'>Change here</a>
        </p>
        <button type='submit'>Log In</button>
      </form>
    </section>
  );
};

export default LoginPage;
