import Sections from '../Sections';
import styles from './Missions.module.css';
import { missionsData } from '@data/missions';

const Missions = () => {
  return (
    <Sections className={styles.mission}>
      {missionsData.map((category) => (
        <div key={category.title} className={styles.mission__category}>
          <h2 className={styles.mission__title}>{category.title}</h2>

          <ul className={styles.mission__list}>
            {category.items.map((item) => {
              const url = item.toLowerCase().replace(' ', '-');
              return (
                <li key={item}>
                  <a href={url} className={styles.mission__link}>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </Sections>
  );
};

export default Missions;
