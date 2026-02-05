import { cards } from '../../data/data';
import Card from '../ui/Card';

const ConceptoSection = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl mb-12">Nuevo concepto de juguetería</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ConceptoSection;
