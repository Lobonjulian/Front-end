import styles from './About.module.css';

const aboutText = [
  'Orbitist cree en el desarrollo riguroso de estrategias interestelares y ejecuciones impecables, Creamos experiencias que trascienden lo cotidiano.',
  'Diseñamos intedaces que conectan mundos, impulsan auciencias y expanden horizontes. Ayudamos a las marcas visionarias a conquistar 10 que viene después en la frontera digital.',
];
const About = () => {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.about__title}>
        Nos dedicamos a las ideas el diseño y la tecnología que desafían la
        gravedad Cuando el mundo se detiene nosotros orbitamos
      </h2>
      
      <div className={styles.about__content}>
        {aboutText.map((paragraph) => (
          <p key={paragraph} className={styles.about__text}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
