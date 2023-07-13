import React from 'react';
// import PropTypes from 'prop-types';
import styles from './RegisterPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const RegisterPage = () => {
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
          <form>
            <div className='form-group'>
              <p className={styles.form_header}>Podaj dane do rejestracji</p>
              <input type='email' className='form-control' placeholder='E-mail *' />
            </div>
            <div className='form-group'>
              <input className='form-control' placeholder='Hasło *' />
            </div>
            <div className='form-group'>
              <input className='form-control' placeholder='Powtórz hasło *' />
            </div>
            <div className='form-group form-check form-switch d-flex justify-content-end'>
              <input
                className={`${styles.showPasswordInput} form-check-input`}
                type='checkbox'
                role='switch'
                id='showPasswordSwitch'
              />
              <label className={`${styles.showPassword} form-check-label`}>
                Pokaż hasło
              </label>
            </div>
            <div className={`${styles.checkBoxes} form-group`}>
              <div className={`${styles.singleCheckBoxes} form-check`}>
                <input type='checkbox' className='form-check-input' id='markAllCheck' />
                <label className='form-check-label'>Zaznacz wszystko</label>
              </div>
              <div className={`${styles.singleCheckBoxes} form-check`}>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='acceptRulesCheck'
                />
                <label className='form-check-label'>
                  Akteptuje warunki
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

              <Button href='/' variant='main' className={styles.button_register}>
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
