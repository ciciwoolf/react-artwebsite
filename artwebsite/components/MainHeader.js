import styles from './main-header.module.css';

export const MainHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.name}>Cici Woolf</p>
        <p className={styles.title}>...software developer & painter</p>
      </div>
    </div>
  );
};
