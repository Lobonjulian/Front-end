import LogoSvg from '/favicon.svg';
import styles from './Logo.module.css';
const Logo = ({ size = 'md' }) => {
  return (
    <img
      src={LogoSvg}
      alt="Orbitist Studio"
      className={`${styles.logo} ${styles[size]}`}
    />
  );
};

export default Logo;
