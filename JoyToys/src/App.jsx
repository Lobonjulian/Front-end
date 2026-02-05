import Header from './components/layout/Header';
import Hero from './components/section/Hero';
import AddressSection from './components/section/AddressSection';
import ConceptoSection from './components/section/ConceptoSection';
import EventSection from './components/section/EventSection';
import Call from './components/section/Call';
import Footer from './components/layout/Footer';
import Categories from './components/section/Categories';
import Newsletter from './components/section/Newsletter';

function App() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Hero />
        <ConceptoSection />
        <EventSection />
        <AddressSection />
        <Call />
        <Categories />
        <Newsletter/>
      </main>
      <Footer />
    </>
  );
}

export default App;
