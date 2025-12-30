import Logo from '@/components/common/Logo';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Logo />
        <span className="navbar__divider">|</span>
        <span className="navbar__help">Centro de Ayuda</span>
      </div>
      <div className="navbar__actions">
        <button className="btn btn--primary">Enviar solicitud</button>
        <button className="btn btn--secondary">Iniciar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
