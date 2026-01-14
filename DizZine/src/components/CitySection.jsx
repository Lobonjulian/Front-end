import CityFooter from './CityFooter.jsx';

const CitySection = ({
  city,
  department,
  population,
  backgroundColor,
  imageUrl,
}) => {
  return (
    <section
      style={{ backgroundColor: backgroundColor }}
      className="cities"
      id={city}
    >
      <img src={imageUrl} alt={`cover de ${city}`} />
      <h1>{city}</h1>
      <p>{department}</p>
      <p>Población total #{population}</p>
      <button>Leer más</button>
      
      <CityFooter dept={department} population={population} />
    </section>
  );
};

export default CitySection;
