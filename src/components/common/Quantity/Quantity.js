import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quantity.module.scss';
import Button from '../Button/Button';

const Quantity = ({ value }) => {
  return (
    <div className={`row ${styles.root}`}>
      <Button variant={'outline'}>-</Button>
      <input type='text' id='quantity' value={value}></input>
      <Button variant={'outline'}>+</Button>
    </div>
  );
};

Quantity.propTypes = {
  value: PropTypes.number,
};

export default Quantity;
