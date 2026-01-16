import { useEffect, useState, useRef } from 'react';

const CitySection = ({
  city,
  department,
  population,
  backgroundColor,
  imageUrl,
  onVisible,
  ...props
}) => {
  const sectionRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(city);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [city, onVisible]);

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: backgroundColor }}
      className="cities"
      id={city}
      {...props}
    >
      <img src={imageUrl} alt={`cover de ${city}`} className="city__image" />
      <h1>{city}</h1>

      <button
        onClick={handleToggle}
        className={`btn ${showMore ? 'active' : ''}`}
      >
        {showMore ? 'Cerrar' : 'Leer mas'}
      </button>

      <div
        className={`city__info-content ${
          showMore ? 'is-visible' : 'is-hidden'
        }`}
      >
        <p>Departamento: {department}</p>
        <p>Población total de {population} ciudadanos</p>
      </div>
    </section>
  );
};

export default CitySection;
