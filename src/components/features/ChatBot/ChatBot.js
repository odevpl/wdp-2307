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

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addMessage = (message, sender) => {
    setMessages(prevMessages => [...prevMessages, { message, sender }]);
  };

  const handleUserInput = e => {
    e.preventDefault();
    const userMessage = inputValue.trim().toLowerCase();
    const botResponse = getBotResponse(userMessage);
    addMessage(inputValue, 'user');
    addMessage(botResponse, 'bot');
    setInputValue('');
  };

  const getBotResponse = userMessage => {
    switch (userMessage) {
      case 'cena dostawy':
        return 'Cena dostawy wynosi 50zł';
      case 'opcje dostawy':
        return 'Korzystamy z kuriera firmy DPD';
      case 'ile produktów':
        return 'Jeden kurier może dostarczyć do 10 produktów.';
      case 'czas oczekiwania':
        return 'Czas oczekiwania na produkty wynosi 20 dni';
      case 'instrukcje montażu':
        return 'Tak, każdy mebel zawiera instrukcję montarzu';
      case 'gwarancja':
        return 'Tak, meble są objęte 2 letnią gwarancją';
      case 'zwrot':
        return 'Meble można zwrocić do 14 dni na koszt sklepu';
      case 'metody płatności':
        return 'Za meble można zapłacić przelewem i przy odbiorze';
      default:
        return 'W takim przypadku proponuję kontakt z naszym pracownikiem. Czy mogę pomóc w czymś jeszcze?';
    }
  };

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
        <div className={styles.chatbox}>
          <div className={styles.chat__messages}>
            <ChatBotMessage>How can I help you?</ChatBotMessage>
            <div className={styles.chatlog}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={
                    `message ${
                      msg.sender === 'bot' ? styles.botMessage : styles.userMessage
                    }` && styles.messageWindow
                  }
                >
                  {msg.message}
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={handleUserInput} className={styles.chat__form}>
            <input
              type='text'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder='Type your message...'
            />
            <button type='submit'>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
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
