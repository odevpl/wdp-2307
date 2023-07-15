import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
import styles from './RegisterPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const RegisterPage = () => {
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  // STATES TO HANDLE ERRORS IN FORM
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [markAllChecked, setMarkAllChecked] = useState(false);
  const [acceptRulesChecked, setAcceptRulesChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    if (name === 'markAllCheck') {
      setMarkAllChecked(checked);
      setAcceptRulesChecked(checked);
      setNewsletterChecked(checked);
      // Add more checkboxes here if needed
    } else if (name === 'acceptRulesCheck') {
      setAcceptRulesChecked(checked);
    } else if (name === 'newsletterCheck') {
      setNewsletterChecked(checked);
    }
  };

  const handleSubmit = data => {
    // eslint-disable-next-line
    console.log(data);
  };

  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-8 mx-auto'>
          <div
            className={`${styles.account} text-center mb-3 d-flex justify-content-between`}
          >
            <div className='form-check form-check-inline'>
              <input
                className={`${styles.custom_radio} form-check-input`}
                type='radio'
                name='accountType'
                id='haveAccount'
              />
              <label className='form-check-label'>Mam konto</label>
            </div>
            <div className='form-check form-check-inline'>
              <input
                className={`${styles.custom_radio} form-check-input`}
                type='radio'
                name='accountType'
                id='noAccount'
              />
              <label className='form-check-label'>Nie mam konta</label>
            </div>
          </div>
          <form onSubmit={validate(handleSubmit)}>
            <p className={styles.form_header}>Podaj dane do rejestracji</p>
            <div className='form-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Imię *'
                {...register('firstName', {
                  required: true,
                  minLength: 4,
                  maxLength: 30,
                })}
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <small className='d-block form-text text-danger mt-2'>
                  First Name must be between 3-30 characters
                </small>
              )}
            </div>
            <div className='form-group mb-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Nazwisko *'
                {...register('lastName', {
                  required: true,
                  minLength: 4,
                  maxLength: 30,
                })}
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <small className='d-block form-text text-danger mt-2'>
                  {' '}
                  Last Name must be between 3-30 characters
                </small>
              )}
            </div>
            <div className='form-group mb-3'>
              <input
                type='email'
                className='form-control'
                placeholder='E-mail *'
                value={email}
                {...register('email', {
                  required: true,
                })}
                onChange={e => setEmail(e.target.value)}
              />
              {errors.email && (
                <small className='d-block form-text text-danger mt-2'>
                  {' '}
                  Email must be between 3-30 characters
                </small>
              )}
            </div>
            <div className='form-group mb-3'>
              <input
                type={showPassword ? 'text' : 'password'}
                className='form-control'
                placeholder='Hasło *'
                value={password}
                {...register('password', {
                  required: true,
                  minLength: 3,
                })}
                onChange={e => setPassword(e.target.value)}
              />
              {errors.password && (
                <small className='d-block form-text text-danger mt-2'>
                  {' '}
                  Password too short (min: 3 characters)
                </small>
              )}
            </div>
            <div className='form-group mb-3'>
              <input
                type={showPassword ? 'text' : 'password'}
                className='form-control'
                placeholder='Powtórz hasło *'
                value={confirmPassword}
                {...register('confirmPassword', {
                  required: true,
                  minLength: 3,
                })}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <small className='d-block form-text text-danger mt-2'>
                  {' '}
                  Passwords must be the same
                </small>
              )}
            </div>
            <div className='form-group form-check form-switch d-flex justify-content-end mb-3'>
              <input
                className={`${styles.showPasswordInput} form-check-input`}
                type='checkbox'
                role='switch'
                id='showPasswordSwitch'
                onChange={handleShowPasswordChange}
              />
              <label className={`${styles.showPassword} form-check-label`}>
                Pokaż hasło
              </label>
            </div>
            <div className={`${styles.checkBoxes} form-group`}>
              <div className={`${styles.singleCheckBoxes} form-check`}>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='markAllCheck'
                  name='markAllCheck'
                  checked={markAllChecked}
                  onChange={handleCheckboxChange}
                />
                <label className='form-check-label'>Zaznacz wszystko</label>
              </div>
              <div className={`${styles.singleCheckBoxes} form-check`}>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='acceptRulesCheck'
                  name='acceptRulesCheck'
                  checked={acceptRulesChecked}
                  onChange={handleCheckboxChange}
                  required
                />
                <label className='form-check-label'>
                  Akceptuje warunki
                  <a href='#' className={styles.rules}>
                    {' '}
                    regulaminu *
                  </a>
                </label>
              </div>
              <div className={`${styles.singleCheckBoxes} form-check`}>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='newsletterCheck'
                  name='newsletterCheck'
                  checked={newsletterChecked}
                  onChange={handleCheckboxChange}
                />
                <label className='form-check-label'>
                  Tak, tak! Chcę otrzymywać JEŻowy newsletter
                </label>
              </div>
            </div>
            <div className='text-center d-flex justify-content-between'>
              <Button href='/' className={styles.button_back}>
                <FontAwesomeIcon icon={faAngleLeft} />
                <span> Wróć</span>
              </Button>

              <Button variant='main' className={styles.button_register} type='submit'>
                Zarejestruj się
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
