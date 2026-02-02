import styles from './PlanetStats.module.css';

const PlanetStats = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      {stats.map(({ label, value }) => (
        <li key={label} className={styles.item}>
          <span className={styles.label}>{label}</span>
          <span className={styles.value}> {value}</span>
        </li>
      ))}
    </ul>
  );
};

export default PlanetStats;
