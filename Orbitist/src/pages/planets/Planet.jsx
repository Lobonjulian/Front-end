import { useParams } from 'react-router-dom';
import { planets } from '@data/planets';

import Sections from '@components/sections/Sections';
import PlanetIntro from '@pages/planets/sections/PlanetIntro/PlanetIntro';
import PlanetStats from '@pages/planets/sections/PlanetStats/PlanetStats';
import Hero from '@components/sections/Hero/Hero';

const Planet = ({ theme, toggleTheme }) => {
  const { planet } = useParams();
  const data = planets[planet];

  if (!data) {
    return (
      <Sections>
        <h2>Planeta no encontrado</h2>
      </Sections>
    );
  }

  return (
    <>
      <Sections>
        <Hero
          title={data.name}
          onAction={toggleTheme}
          theme={theme}
          visual={{ ...data.visual }}       
        />
        <PlanetIntro description={data.description} />
        <PlanetStats stats={data.stats} />
      </Sections>
    </>
  );
};

export default Planet;
