import VisualLayer from './VisualLayer';

const HeroVisual = ({ theme, visual }) => {
  const config =
    theme === 'dark'
      ? { image: visual.layers.dark, variant: 'dark' }
      : { image: visual.layers.light, variant: 'light' };
  return <VisualLayer {...config} />;
};

export default HeroVisual;
