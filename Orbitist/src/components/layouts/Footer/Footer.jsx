import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__nav}>
        <a href="#missions">Todos los planetas</a>
        <a href="#projects">Trabajos</a>
      </nav>
    </footer>
  );
};

export default Footer;
