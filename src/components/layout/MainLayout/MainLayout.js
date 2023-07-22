import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateViewport } from '../../../redux/viewportRedux';
import { loadProducts } from '../../../redux/productsActions';

import Loader from '../../utils/Loader/Loader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState('');
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Fetch data
    dispatch(loadProducts())
      .then(() => {
        // Once data is fetched successfully, hide the loader after 5 seconds
        setTimeout(() => {
          setShowLoader(false);
        }, 2000);
      })
      .catch(error => {
        // Handle error during data fetching and hide the loader
        console.error(error);
        setShowLoader(false);
      });
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 992) {
        setMode('desktop');
      } else if (screenWidth >= 576) {
        setMode('tablet');
      } else {
        setMode('mobile');
      }

      dispatch(updateViewport(mode));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch, mode]);

  return (
    <div>
      {showLoader && <Loader />}
      {!showLoader && <Header />}
      {!showLoader && children}
      {!showLoader && <Footer />}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
