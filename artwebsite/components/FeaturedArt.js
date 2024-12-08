import React from 'react';
import { FeaturedItem } from './FeaturedItem';
import styles from './featured-art.module.css';
import { FeaturedWork } from '@/data/data';

export const FeaturedArt = () => {
  const featuredWork = FeaturedWork.filter((art) => art.featured === true);
  console.log(featuredWork);
  let Work = featuredWork.map((item) => {
    return (
      <FeaturedItem
        id={item.id}
        key={item.id}
        image={item.image}
        description={item.description}
        name={item.name}
      />
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{Work}</div>
    </div>
  );
};
