import styles from './page.module.css';
import { MainHeader } from '@/components/MainHeader';
import ArtVideo from '@/components/ArtVideo'
import { NavLinks } from '@/components/NavLinks';
import { Footer } from '@/components/Footer';
import { DigitalWorks } from '@/data/data';

const link = { href: '/', label: 'HOME' };
const link_gallery = { href: '/gallery', label: 'GALLERY' };

export default function DigitalArt() {
  console.log(DigitalWorks);
  return (
    <div className={styles.container}>
      <MainHeader />
      <NavLinks link={link} />
      <NavLinks link={link_gallery} />
      <div className={styles.artContainer}>
        <h1 className={styles.title}>Javascript art</h1>
        {DigitalWorks.map((art) => (
          <div key={art.id}>
            <ArtVideo publicId={art.publicId} cloudName={art.cloudName} />
            <p className={styles.header}>{art.header}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
