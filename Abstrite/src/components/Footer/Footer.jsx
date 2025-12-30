import { footerLinks } from '../../data/footerContent.js';
import './Footer.css';
import Logo from '../common/Logo.jsx';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {footerLinks.map((section, index) => (
            <div key={index} className="footer__column">
              <h3 className="footer__title">{section.title}</h3>
              <ul className="footer__list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="footer__item">
                    <a href="#" className="footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            <p className="footer__text">
              © 2023 Abstrite. Todos los derechos reservados.
            </p>
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
