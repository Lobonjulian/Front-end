import Logo from '/svg/logo.svg';

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" className="logo-img" /> - {title}
      </div>
      <a href="mailto:info@DizZine.com" className="info">
        info@DizZine.com
      </a>
    </header>
  );
};

export default Header;
