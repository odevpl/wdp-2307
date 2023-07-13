import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const [, setHoveredTab] = useState(null);

  const handleTabClick = tabLabel => {
    setActiveTab(tabLabel);
  };

  const handleTabMouseEnter = tabLabel => {
    setHoveredTab(tabLabel);
  };

  const handleTabMouseLeave = () => {
    setHoveredTab(null);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      {/* BANER WDP-39 */}
      <div className='container'>
        <div className={styles.root}>
          <div className={styles.ProjectNew}>
            <div className={styles.upSection}>
              <div className='row'>
                <div className='col-12'>
                  <div className={styles.upText}>
                    <p className={styles.styleBedroom}>BEDROOM</p>
                    <p className={styles.styleFur}>FURNITURE</p>
                  </div>
                </div>
                <div className='col-12'>
                  <div className={styles.downText}>
                    <p className={styles.alwaysText}>ALWAYS</p>
                    <p className={styles.procentText}>25%</p>
                    <p className={styles.moreText}>OFF OR MORE</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='row'>
                <div className='col-12'>
                  <div className={styles.downSection}></div>
                  <div className={styles.positionHome}>
                    <p className={styles.homeText}>Home</p>
                    <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
                    <p className={styles.furText}>Furniture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRZEGLĄD REVIEW WDP-44 */}
      <div className={styles.tabs}>
        <div className={styles.tabList}>
          <div
            className={`${styles.tab} ${activeTab === 'Tab 1' ? styles.active : ''}`}
            onClick={() => handleTabClick('Tab 1')}
            onMouseEnter={() => handleTabMouseEnter('Tab 1')}
            onMouseLeave={handleTabMouseLeave}
          >
            DESCRIPTION
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'Tab 2' ? styles.active : ''}`}
            onClick={() => handleTabClick('Tab 2')}
            onMouseEnter={() => handleTabMouseEnter('Tab 2')}
            onMouseLeave={handleTabMouseLeave}
          >
            REVIEWS(0)
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'Tab 3' ? styles.active : ''}`}
            onClick={() => handleTabClick('Tab 3')}
            onMouseEnter={() => handleTabMouseEnter('Tab 3')}
            onMouseLeave={handleTabMouseLeave}
          >
            SPECIFICATION
          </div>
          <div
            className={`${styles.tab} ${activeTab === 'Tab 4' ? styles.active : ''}`}
            onClick={() => handleTabClick('Tab 4')}
            onMouseEnter={() => handleTabMouseEnter('Tab 4')}
            onMouseLeave={handleTabMouseLeave}
          >
            <p>CUSTOM TAB</p>
          </div>
        </div>
        <div className={styles.tabContent}>
          {activeTab === 'Tab 1' && (
            <div className={styles.positionContent}>
              <h2>Content for DESCRIPTION</h2>
              <p>This is the content of DESCRIPTION.</p>
            </div>
          )}
          {activeTab === 'Tab 2' && (
            <div className={styles.positionContent}>
              <p>There are no reviews for this product.</p>
              <p className={styles.pReview}>Add a review</p>
              <p>Your Rating</p>
              <div className={styles.rating}>
                <p className={styles.pBad}>Bad</p>
                <p className={styles.pGwiazdki}>gwiazdki</p>
                <p className={styles.pGood}>Good</p>
              </div>
              <form>
                <span className={styles.spanReview}>Your Review</span>
                <textarea className={styles.inputTextArea}></textarea>
                <div className={styles.inputs}>
                  <input
                    className={styles.inputName}
                    type='text'
                    value={name}
                    placeholder='Name*'
                    onChange={e => setName(e.target.value)}
                  />
                  <input
                    className={styles.inputEmail}
                    type='text'
                    value={email}
                    placeholder='Email*'
                    onChange={e => setEmail(e.target.value)}
                  />
                  <button className={styles.inputButton}>CONTINUE</button>
                </div>
              </form>
            </div>
          )}
          {activeTab === 'Tab 3' && (
            <div className={styles.positionContent}>
              <h2>Content for SPECIFICATION</h2>
              <p>This is the content of SPECIFICATION</p>
            </div>
          )}
          {activeTab === 'Tab 4' && (
            <div className={styles.positionContent}>
              <h2>Content for CUSTOM TAB</h2>
              <p>This is the content of CUSTOM TAB</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
// ProductPage.propTypes = {};

export default ProductPage;
