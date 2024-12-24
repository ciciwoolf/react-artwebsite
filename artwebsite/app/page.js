import Image from 'next/image';
import styles from './page.module.css';
import { SquareWorks } from '@/data/data';
import { FeaturedArtSlider } from '@/components/FeaturedArtSlider';
import { MainHeader } from '@/components/MainHeader';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <MainHeader />
        <FeaturedArtSlider data={SquareWorks} />
      </section>
      <footer className={styles.footer}></footer>
    </div>
  );
}
