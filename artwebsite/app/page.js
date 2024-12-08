import Image from 'next/image';
import styles from './page.module.css';
import { FeaturedArt } from '@/components/FeaturedArt';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.content}>
          <FeaturedArt />
        </div>
        <div className={styles.sidebar}>
          <p className={styles.name}>Cici Woolf</p>

          <p className={styles.city}>
            Minneapolis &<br />
            Buenos Aires
          </p>
        </div>
      </section>

      <footer className={styles.footer}></footer>
    </div>
  );
}
