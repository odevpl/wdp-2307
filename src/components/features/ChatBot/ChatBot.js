import React from 'react';
import { useRef, useState } from 'react';

import styles from './ChatBot.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSync,
  faTimes,
  faPaperPlane,
  faComments,
} from '@fortawesome/free-solid-svg-icons';

import ChatBotMessage from './ChatBotMessage';

const ChatBot = () => {
  const chat = useRef(null);
  const [chatActive, setChatActive] = useState(false);

  const onChatBtnClick = () =>
    chatActive ? setChatActive(false) : setChatActive(true);
  const onChatCloseBtnClick = () => setChatActive(false);

  return (
    <section className={styles.chatBot}>
      <div className={chatActive ? styles.active : styles.chat} ref={chat}>
        <div className={styles.chat__header}>
          <button type='button' className={styles.chat__refreshBtn}>
            <FontAwesomeIcon icon={faSync} />
          </button>
          <button
            onClick={onChatCloseBtnClick}
            type='button'
            className={styles.chat__closeBtn}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className={styles.chat__messages}>
          <ChatBotMessage>How can I help you?</ChatBotMessage>
        </div>

        <form className={styles.chat__form}>
          <input
            title='message'
            type='text'
            placeholder='Write you question...'
          ></input>
          <button type='submit'>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
        <div className={styles.chat__iconBox}>
          <FontAwesomeIcon className={styles.chat__icon} icon={faComments} />
        </div>
        <div className={styles.chat__iconBottom}></div>
      </div>

      <button onClick={onChatBtnClick} className={styles.chatBotBtn} type='button'>
        Need
        <br />
        help?
        <br />
        Write!
      </button>
    </section>
  );
};

export default ChatBot;
