import styles from './nav-links.module.css';
import Link from 'next/link';

export const NavLinks = ({link}) => {
    return (
     <><Link className={styles.link} href={link.href}>{link.label}</Link></>
    );
  };