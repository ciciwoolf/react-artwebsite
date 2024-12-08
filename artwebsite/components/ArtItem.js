import React from 'react';
import styles from './art-item.module.css';

export const ArtItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} alt={props.name} src={props.image} />
      <div className={styles.overlay}>
        <article className={styles.article}>
          <p className={styles.article__paragraph}>{props.name}</p>
        </article>
      </div>
    </div>
  );
};
