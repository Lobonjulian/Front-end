import styles from './Hero.module.css';

const Hero = ({ title, theme, onToggleTheme }) => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero__title}>{title}</h1>

      <div className={styles.hero__image}>
        <img
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
          alt="imagen de referencia"
          loading="lazy"
          className={styles.hero__img}
        />
        <button
          onClick={onToggleTheme}
          className={styles.hero__btn}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '🌜' : '🌞'}
        </button>
      </div>
    </section>
  );
};

export default Hero;
