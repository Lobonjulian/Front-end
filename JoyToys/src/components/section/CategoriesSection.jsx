import { categories } from '@data/data';
import CategoryCard from '../ui/Card/CategoryCard';

const CategoriesSection = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl text-center mb-12">Nuestras categorías</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {categories.map((category) => (
          <CategoryCard key={category.id} title={category.title} icon={category.icon}  />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
