import styles from './HeroVisual.module.css';

const VisualLayer = ({ image, variant }) => {
  return (
    <div className={styles.visual}>
      <img
        src={image}
        alt="Visual layer"
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className={`${styles.layer} ${styles[variant]}`}
      />
      <div className={styles[`overlay${variant}`]} />
    </div>
  );
};

export default VisualLayer;
