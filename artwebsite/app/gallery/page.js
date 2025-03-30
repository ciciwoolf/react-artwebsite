import styles from './page.module.css';
import { ArtGridWorks, SquareWorks } from '@/data/data';
import { MainHeader } from '@/components/MainHeader';
import { ArtGrid } from '@/components/ArtGrid';
import { NavLinks } from '@/components/NavLinks';
import { Footer } from '@/components/Footer';

const link = { href: '/', label: 'Home' };

export default function Gallery() {
  return (
    <div className={styles.container}>
      <MainHeader />
      <NavLinks link={link} />
      <ArtGrid data={ArtGridWorks} />
      <Footer />
    </div>
  );
}
