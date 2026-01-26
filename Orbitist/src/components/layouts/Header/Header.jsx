import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Orbistst</span>
      <nav className={styles.nav}>
        <a href="#"> Proyectos</a>
      </nav>
    </header>
  );
};

export default Header;
