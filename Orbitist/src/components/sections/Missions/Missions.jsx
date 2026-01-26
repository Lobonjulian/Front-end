import styles from './Missions.module.css';
import { missionsData } from '@data/missions';

const Missions = () => {
  return (
    <section className={styles.mission}>
      {missionsData.map((category) => (
        <div key={category.title} className={styles.mission__category}>
          <h2 className={styles.mission__title}>{category.title}</h2>

          <ul className={styles.mission__list}>
            {category.items.map((item) => {
              return (
                <li key={item}>
                  <a href="#" className={styles.mission__link}>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Missions;
