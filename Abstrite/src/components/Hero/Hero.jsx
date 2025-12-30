import './Hero.css';

const Hero = ({ onSearchChange }) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <section className="hero">
      <h1 className="hero__title">¿Cómo podemos ayudarte?</h1>
      <div className="hero__search-wrapper">
        <input
          type="text"
          placeholder="Buscar"
          className="hero__input"
          onChange={handleInputChange}
        />
        <span className="hero__icon">→</span>
      </div>
    </section>
  );
};

export default Hero;
