import React from 'react';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promotions from '../../features/Promotions/Promotions';
import Brands from '../../features/Brands/Brands';
import Promoted from '../../features/Promoted/Promoted';

import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGallery';

import ChatBot from '../../features/ChatBot/ChatBot';

import LatestBlog from '../../features/LatestBlog/LatestBlog';
import Comments from '../../features/Comments/Comments';

const Homepage = () => {
  return (
    <div className={styles.root}>
      <Promoted />
      <FeatureBoxes />
      <Promotions />
      <NewFurniture />
      <FurnitureGallery />
      <LatestBlog />
      <Brands />
      <Comments />
      <ChatBot />
    </div>
  );
};

export default Homepage;
