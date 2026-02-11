import { useState } from 'react';
import { locations } from '@data/locations';
import Map from '../ui/Map';

const LocationSection = () => {
  const [currentLocation, setCurrentLocation] = useState(locations[0]);

  return (
    <section className="py-20">
      <div className="container-page">
        <h2 className="mb-8">Visítenos en {currentLocation.city}</h2>

        <div className="flex gap-4 mb-8">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setCurrentLocation(location)}
              className={`px-4 py-2 border transition ${currentLocation.id === location.id} ?
              'border-primary-200 text-bg-100' : 'bg-bg-100 text-primary-100'
               `}
            >
              {location.city}
            </button>
          ))}
        </div>
        <Map lat={currentLocation.lat} lng={currentLocation.lng} />

        <p className="mt-4 text-sm text-text-200">{currentLocation.address}</p>
      </div>
    </section>
  );
};

export default LocationSection;
