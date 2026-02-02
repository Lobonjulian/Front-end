import About from '@components/sections/About/About';
import Contact from '@components/sections/Contact/Contact';
import Hero from '@components/sections/Hero/Hero';
import Missions from '@components/sections/Missions/Missions';
import nubes from '@assets/image/nube.png';
import humo from '@assets/image/humo.png';

const Home = ({ theme, toggleTheme }) => {
  return (
    <>
      <Hero
        title="La agencia para lo que orbita después"
        imgHero="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
        onAction={toggleTheme}
        theme={theme}
        visual={{
          layers: {
            dark: humo,
            light: nubes,
          },
        }}
      />
      <About />
      <Missions />
      <Contact />
    </>
  );
};

export default Home;
