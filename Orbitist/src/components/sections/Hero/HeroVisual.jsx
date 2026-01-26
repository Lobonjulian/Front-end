import styles from './Hero.module.css';

const HeroVisual = () => {
  return (
    <div className={styles.heroVisual}>
      <div className={styles.orbit}></div>
      <div className={styles.planet}></div>
    </div>
  );
};

export default HeroVisual;
