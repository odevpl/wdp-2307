import React from 'react';
import styles from './ChatBot.module.scss';
import propTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const ChatBotMessage = props => {
  return (
    <div className={styles.chat__message}>
      {props.icon ? (
        <img src={props.icon} alt='user avatar' />
      ) : (
        <FontAwesomeIcon icon={faUserAstronaut} />
      )}

      <p className={styles.chat__messageText}>{props.children}</p>
    </div>
  );
};

ChatBotMessage.propTypes = {
  children: propTypes.string,
  icon: propTypes.string,
};

export default ChatBotMessage;
