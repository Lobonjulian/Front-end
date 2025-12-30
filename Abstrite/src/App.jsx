import { helpContent } from './data/helpContent.js';
import Card from './components/common/Card/Card.jsx';
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>

      <main className="app__main">
        <Hero />

        <section className="app__grid">
          {helpContent.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              linkText={card.linkText}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
