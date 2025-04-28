import styles from './page.module.css';
import { getFeaturedArtworks } from '@/lib/graphql';
import { MainHeader } from '@/components/MainHeader';
import { NavLinks } from '@/components/NavLinks';
import { FeaturedArtSlider } from '@/components/FeaturedArtSlider';
import { Footer } from '@/components/Footer';

const link = { href: '/gallery', label: 'GALLERY' };

export default async function Home() {
  const featuredWork = await getFeaturedArtworks();
  if (!featuredWork) {
    console.log('No featured work found');
    return null;
  }
  return (
    <div className={styles.container}>
      <MainHeader />
      <NavLinks link={link} />
      <FeaturedArtSlider featuredWork={featuredWork} />
      <Footer />
    </div>
  );
}
