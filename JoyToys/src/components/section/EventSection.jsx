import { useState } from 'react';
import { events } from '@data/data';
import EventCard from '../ui/Card/EventCard';

const EventSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleEvents = showAll ? events : events.slice(0, 3);

  return (
    <section className="py-20 flex flex-col">
      <div className="container-page">
        <h2 className="text-3xl text-center mb-12">Eventos Infantiles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pb-8 border-b border-text-200 ">
        {visibleEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      <button
        onClick={() => setShowAll((prev) => !prev)}
        className="pt-2 self-star text-sm underline"
      >
        {showAll ? 'ver menos' : 'ver todo'}
      </button>
    </section>
  );
};

export default EventSection;
