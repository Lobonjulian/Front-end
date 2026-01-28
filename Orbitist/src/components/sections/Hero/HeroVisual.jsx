import styles from './Hero.module.css';

const HeroVisual = () => {
  return (
    <div className={styles.heroVisual} aria-hidden="true">
      <span className={styles.layer + ' ' + styles.layerBack} />
      <span className={styles.layer + ' ' + styles.layerMid} />
      <span className={styles.layer + ' ' + styles.layerFront} />
    </div>
  );
};

export default HeroVisual;
