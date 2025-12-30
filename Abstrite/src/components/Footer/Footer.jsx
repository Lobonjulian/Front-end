import FooterMenu from './FooterMenu';
import FooterBottom from './FooterBottom.jsx';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterMenu />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
