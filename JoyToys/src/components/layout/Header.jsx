import Logo from '../Logo';

const Header = () => {
  return (
    <header className="fixess top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
      <Logo />
      <nav>
        <ul className="flex gap-1">
          <li>
            <a href="#event" className="text-text-200 hover:text-primary-200">
              Eventos
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="text-text-200 hover:text-primary-200"
            >
              Productos
            </a>
          </li>
          <li>
            <a href="#contact" className="text-text-200 hover:text-primary-200">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
