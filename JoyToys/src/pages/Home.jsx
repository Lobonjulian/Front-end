import CategoriesSection from '@components/section/CategoriesSection';
import ConceptsSection from '@components/section/ConceptsSection';
import EventsSection from '@components/section/EventSection';
import Footer from '@layout/Footer';
import Header from '@layout/Header/Header';
import Hero from '@components/section/Hero';
import LocationSection from '@components/section/LocationSection';
import NewsletterSection from '@components/section/NewsletterSection';
import ProviderCTASection from '@components/section/ProviderCTASection';

const Home = () => {
  return (
    <>
      <Header />
      <Hero
        title={
          'Joy Toys es una tienda cuidadosamente seleccionada de juguetes educativos, creativos y de desarrollo infantil abierta todo el año en la calle alegría 123'
        }
        imageSrc={'/assets/heroSection.png'}
      />
      <ConceptsSection />
      <EventsSection />
      <LocationSection />
      <ProviderCTASection />
      <CategoriesSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Home;
