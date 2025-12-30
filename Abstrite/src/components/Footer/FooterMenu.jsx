import { footerLinks } from '@data/footerContent.js';

const FooterMenu = () => {
  return (
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
  );
};

export default FooterMenu;
