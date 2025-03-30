import styles from './page.module.css';
import { MainHeader } from '@/components/MainHeader';
import { NavLinks } from '@/components/NavLinks';
import { FeaturedArtSlider } from '@/components/FeaturedArtSlider';
import { Footer } from '@/components/Footer';

const link = { href: '/gallery', label: 'GALLERY' };

export default function Home() {
  return (
    <div className={styles.container}>
      <MainHeader />
      <NavLinks link={link} />
      <FeaturedArtSlider />
      <Footer />
    </div>
  );
}
