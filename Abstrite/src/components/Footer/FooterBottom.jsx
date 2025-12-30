import Logo from '../common/Logo';

const FooterBottom = () => {
  const year = new Date().getFullYear();
  
  return (
    <div className="footer__bottom">
      <div className="footer__copyright">
        <p className="footer__text">
          © 2023 - {year} Abstrite. Todos los derechos reservados.
        </p>
        <Logo />
      </div>
    </div>
  );
};

export default FooterBottom;
