import React from 'react';
import styles from './featured-item.module.css';

export const FeaturedItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} alt={props.name} src={props.image} />
      <div className={styles.overlay}>
        <article className={styles.article}>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.description}>{props.description}</p>
        </article>
      </div>
    </div>
  );
};
