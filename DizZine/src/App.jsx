import { useEffect, useState } from 'react';
import CITIES from './data/cities';
import CitySection from './components/CitySection';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [activeCity, setActiveCity] = useState('DizZine');
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCityChange = (cityName) => {
    setActiveCity(`Poster de ${cityName}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setCities(CITIES);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading__spinner">
          <h2> Cargando...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header title={activeCity} />

      <div>
        {cities.map((city) => (
          <CitySection
            key={city.city}
            {...city}
            onVisible={(name) => handleCityChange(name)}
          />
        ))}
      </div>

      <Sidebar cities={cities} />
      <Footer />
    </div>
  );
}

export default App;
