import { Link, useNavigate } from 'react-router-dom';
import Logo from '@components/ui/Logo';

import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const path = e.target.value;
    if (!path) return;

    navigate(path);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link to="/" className={styles.header__logo}>
          <Logo />
        </Link>
      </div>

      <nav className={styles.nav} role="navigation">
        <select defaultValue="" onChange={handleChange}>
          <option value="" disabled>
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
