import CitySection from './components/CitySection';
import Sidebar from './components/Sidebar';
import CITIES from './data/cities';

function App() {
  return (
    <div className="app">
      <div>
        {CITIES.map((city) => (
          <CitySection key={city.city} {...city} />
        ))}
      </div>
      <Sidebar cities={CITIES} />
    </div>
  );
}

export default App;
