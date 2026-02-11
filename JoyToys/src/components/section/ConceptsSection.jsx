import { concepts } from '@data/data';
import Card from '../ui/Card/Card';

const ConceptsSection = () => {
  return (
    <section className="py-20">
      <div className="container-page">
        <h2 className="section-title mb-12">Nuevo concepto de juguetería</h2>

      <div className="grid gap-10 md:grid-cols-3">
        {concepts.map((concept) => (
          <Card key={concept.id} {...concept} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default ConceptsSection;
