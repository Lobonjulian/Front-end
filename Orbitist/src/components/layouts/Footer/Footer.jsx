import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a href="#missions">Todos los planetas</a>
        <a href="#projects">Trabajos</a>
    </footer>
  );
};

export default Footer;
