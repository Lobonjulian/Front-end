import { useState } from 'react';
import { helpContent } from '@data/helpContent.js';
import Card from '@/components/common/Card/Card.jsx';
import Footer from '@/components/Footer/Footer.jsx';
import Hero from '@/components/Hero/Hero.jsx';
import Navbar from '@/components/Navbar/Navbar';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = helpContent.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <Navbar />
      </header>

      <main className="app__main">
        <Hero onSearchChange={setSearchTerm} />

        <section className="app__grid">
          {filteredCards.length > 0 ? (
            filteredCards.map((item) => (
              <Card
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                linkText={item.linkText}
              />
            ))
          ) : (
            <p className="app__no-results">
              No se encontraron resultados para la búsqueda.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
