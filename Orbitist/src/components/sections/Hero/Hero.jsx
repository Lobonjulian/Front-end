import HeroVisual from './HeroVisual/HeroVisual';
import Sections from '../Sections';

import styles from './Hero.module.css';

const Hero = ({ title, imgHero, onAction, theme, visual }) => {
  return (
    <Sections className={styles.hero}>
      <h1 className={styles.hero__title}>{title}</h1>

      <div className={styles.hero__image}>
        {imgHero && (
          <img
            src={imgHero}
            alt={`imagen de referencia de ${title}`}
            loading="lazy"
            className={styles.hero__img}
          />
        )}
        <button
          onClick={onAction}
          className={styles.hero__btn}
          aria-label="Hero action"
        >
          🌗
        </button>
      </div>

      <HeroVisual theme={theme} visual={visual} />
    </Sections>
  );
};

export default Hero;
