import { aboutData } from '@data/aboutData';
import Sections from '../Sections';

import styles from './About.module.css';

const About = () => {
  return (
    <Sections className={styles.about} id="about">
      <h2 className={styles.about__title}>{aboutData.title}</h2>

      <div className={styles.about__content}>
        {aboutData.text.map((paragraph) => (
          <p key={paragraph} className={styles.about__text}>
            {paragraph}
          </p>
        ))}
      </div>
    </Sections>
  );
};

export default About;
