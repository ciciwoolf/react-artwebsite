import styles from './page.module.css';
import { WaterColorWorks, OilWorks} from '@/data/data';
import { MainHeader } from '@/components/MainHeader';
import { ArtGrid } from '@/components/ArtGrid';
import { NavLinks } from '@/components/NavLinks';
import { Footer } from '@/components/Footer';

const link = { href: '/', label: 'HOME' };

export default function Gallery() {
  return (
    <div className={styles.container}>
      <MainHeader />
      <NavLinks link={link} />
      <div className={styles.artContainer}>
        <h1 className={styles.title}>Oil</h1>
        <ArtGrid data={OilWorks} />
      </div>
      <div className={styles.artContainer}>
        <h1 className={styles.title}>Watercolor / Gouache</h1>
        <ArtGrid data={WaterColorWorks} />
      </div>
      <Footer />
    </div>
  );
}
