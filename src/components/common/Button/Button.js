import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ children, variant, noHover, className: propClassName,type, ...props }) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  let Comp = 'a';

  if (noHover) {
    classes.push(styles.noHover);
    Comp = 'div';
  }
  if (type === 'submit') {
    Comp = 'button';
    props.type = 'submit';
  }

  return (
    <Comp href='#' {...props} className={classes.join(' ')}>
      {children}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
