import Logo from '../../ui/Logo';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const route = e.target.value;
    if (!route) return;

    navigate(`/${route}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <a href='/' className={styles.header__logo}>
          <Logo />
        </a>
      </div>

      <nav className={styles.nav}>
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
