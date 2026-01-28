import MailIcon from '@assets/icons/mail.svg';
import InstagramIcon from '@assets/icons/Instagram.svg';
import LinkedinIcon from '@assets/icons/Linkedin.svg';
import styles from './Contact.module.css';

const contactLinks = [
  {
    label: 'Email',
    value: 'hello@orbitist.studio',
    href: 'mailto:hello@orbitist.studio',
    icon: MailIcon,
  },
  {
    label: 'Instagram',
    value: '@orbitist',
    href: 'https://instagram.com',
    icon: InstagramIcon,
  },
  {
    label: 'LinkedIn',
    value: 'Orbitist Studio',
    href: 'https://linkedin.com',
    icon: LinkedinIcon,
  },
];
const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.contact__title}>
        Hablamos <a href="mailto:hello@orbitist.com">hola@orbitist.com</a>
      </h2>

      <div className={styles.contact__content}>
        <ul className={styles.contact__list}>
          {contactLinks.map((contact) => (
            <li key={contact.label}>
              <a href={contact.href} className={styles.contact__link}>
                <img src={contact.icon} alt={contact.label} />
              </a>
            </li>
          ))}
        </ul>

        <address className={styles.contact__address}>
          Bogotá · Marte · Titán
        </address>
      </div>
    </section>
  );
};

export default Contact;
