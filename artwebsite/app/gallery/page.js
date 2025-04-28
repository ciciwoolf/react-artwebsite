import styles from './page.module.css';
import { getOilArtworks, getWaterColorArtworks } from '@/lib/graphql';
import { MainHeader } from '@/components/MainHeader';
import { ArtGrid } from '@/components/ArtGrid';
import { NavLinks } from '@/components/NavLinks';
import { Footer } from '@/components/Footer';

const link = { href: '/', label: 'HOME' };
const link_js = { href: '/digital', label: 'DIGITAL ART' };

export default async function Gallery() {
  const oilWorks = await getOilArtworks();
  const waterColorWorks = await getWaterColorArtworks();
  
  return (
    <div className={styles.container}>
      <MainHeader />
      <NavLinks link={link} />
      <NavLinks link={link_js} />
      <div className={styles.artContainer}>
        <h1 className={styles.title}>Oil</h1>
        <ArtGrid data={oilWorks} />
      </div>
      <div className={styles.artContainer}>
        <h1 className={styles.title}>Watercolor / Gouache</h1>
        <ArtGrid data={waterColorWorks} />
      </div>
      <Footer />
    </div>
  );
}
