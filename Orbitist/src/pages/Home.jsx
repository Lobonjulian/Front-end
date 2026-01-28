import About from '@components/sections/About/About';
import Contact from '@components/sections/Contact/Contact';
import Container from '@components/layouts/Container';
import Hero from '@components/sections/Hero/Hero';
import Missions from '@components/sections/Missions/Missions';

const Home = ({  toggleTheme }) => {
  return (
    <Container>
      <Hero
        title="La agencia para lo que orbita después"
        imgHero="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
        onAction={toggleTheme}
      />
      <About />
      <Missions />
      <Contact />
    </Container>
  );
};

export default Home;
