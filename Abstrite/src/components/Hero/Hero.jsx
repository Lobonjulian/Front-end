import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">¿Cómo podemos ayudarte?</h1>
      <div className="hero__search-wrapper">
        <input type="text" placeholder="Buscar" className="hero__input" />
        <span className="hero__icon">→</span>
      </div>
    </section>
  );
};

export default Hero;
