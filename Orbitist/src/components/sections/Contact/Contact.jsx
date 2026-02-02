import { contactLinks } from '@data/contactData';
import Sections from '../Sections';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <Sections className={styles.contact} id="contact">
      <h2 className={styles.contact__title}>
        Hablamos <a href="mailto:hello@orbitist.com">hola@orbitist.com</a>
      </h2>

      <div className={styles.contact__content}>
        <ul className={styles.contact__list}>
          {contactLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className={styles.contact__link}
              >
                <Icon className={styles.contact__icon} />
              </a>
            </li>
          ))}
        </ul>

        <address className={styles.contact__address}>
          Bogotá · Marte · Titán
        </address>
      </div>
    </Sections>
  );
};

export default Contact;
