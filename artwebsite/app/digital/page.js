import styles from './page.module.css';
import { MainHeader } from '@/components/MainHeader';
import ArtVideo from '@/components/ArtVideo'
import { NavLinks } from '@/components/NavLinks';
import { Footer } from '@/components/Footer';
import { getDigitalArtworks } from '@/lib/graphql';

const link = { href: '/', label: 'HOME' };
const link_gallery = { href: '/gallery', label: 'GALLERY' };

export default async function DigitalArt() {
  const digitalWorks = await getDigitalArtworks();
  console.log(digitalWorks);

  return (
    <div className={styles.container}>
      <MainHeader />
      <NavLinks link={link} />
      <NavLinks link={link_gallery} />
      <div className={styles.artContainer}>
        <h1 className={styles.title}>Javascript art</h1>
        {digitalWorks.map((art) => (
          <div key={art.publicId}>
            <ArtVideo publicId={art.publicId} cloudName={art.cloudName} />
            <p className={styles.artTitle}>{art.paintingTitle}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
