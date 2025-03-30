import styles from './nav-links.module.css';
import Link from 'next/link';

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const NavLinks = ({link}) => {
    return (
     <><Link className={styles.link} href={link.href}>{link.label}</Link></>
    );
  };