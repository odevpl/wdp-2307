import React from 'react';
import { connect } from 'react-redux';
import { setCurrency } from '../../../redux/currencyRedux';
import PropTypes from 'prop-types';
import styles from './CurrencyChange.module.scss';

const CurrencyConverter = ({ currency, setCurrency, price }) => {
  // Component code here

  const conversionRates = {
    USD: 1,
    EUR: 0.85,
    PLN: 3.94,
  };

  const handleCurrencyChange = event => {
    const newCurrency = event.target.value;
    const rate = conversionRates[newCurrency];
    const convertedPrice = price * rate;
    setCurrency(newCurrency, convertedPrice);
  };

  return (
    <select className={styles.root} value={currency} onChange={handleCurrencyChange}>
      <option value='USD'>USD</option>
      <option value='EUR'>EUR</option>
      <option value='PLN'>PLN</option>
    </select>
  );
};

const mapStateToProps = state => {
  return {
    currency: state.currency.currency,
  };
};

const mapDispatchToProps = {
  setCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);

CurrencyConverter.propTypes = {
  currency: PropTypes.string,
  setCurrency: PropTypes.func,
  price: PropTypes.number,
};
