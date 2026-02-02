import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '@components/ui/Logo';

import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const path = e.target.value;
    if (path) navigate(path);
  };

  return (
    <header className={styles.header}>
      <Link
        to="/"
        aria-current={location.pathname === '/' ? 'page' : undefined}
        className={styles.header__logo}
      >
        <Logo />
      </Link>

      <nav
        className={styles.nav}
        role="navigation"
        aria-label="navegación principal"
      >
        <label htmlFor="planet-select" className={styles.srOnly}>
          Seleccionar planeta
        </label>
        <select
          id="planet-select"
          value={location.pathname}
          onChange={handleChange}
          className={styles.nav__select}
        >
          <option value="/" disabled>
            Planetas
          </option>
          <option value="/marte">Marte</option>
          <option value="/jupiter">Jupiter</option>
          <option value="/saturno">Saturno</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
