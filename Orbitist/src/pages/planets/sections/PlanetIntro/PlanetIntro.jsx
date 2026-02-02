import styles from './PlanetIntro.module.css'
const PlanetIntro = ({title, description}) => {
  return (
    <div className={styles.intro}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default PlanetIntro