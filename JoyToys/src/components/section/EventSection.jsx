import { events } from '../../data/data';
import EventItem from '../ui/EventItem';

const EventSection = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl text-center mb-12">Próximos eventos</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {events.map((event, index) => (
          <EventItem key={index} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventSection;
