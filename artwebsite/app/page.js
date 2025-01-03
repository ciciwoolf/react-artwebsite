import styles from './page.module.css';
import { SquareWorks } from '@/data/data';
import { FeaturedArtSlider } from '@/components/FeaturedArtSlider';
import { MainHeader } from '@/components/MainHeader';

export default function Home() {
  return (
    <div className={styles.container}>
      <MainHeader />
      <FeaturedArtSlider data={SquareWorks} />
      <footer className={styles.footer}></footer>
    </div>
  );
}
