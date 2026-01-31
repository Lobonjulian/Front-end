import nubes from '@assets/image/nube.png';
import humo from '@assets/image/humo.png';
import VisualLayer from './VisualLayer';

const HeroVisual = ({ theme }) => {
  const config =
    theme === 'dark'
      ? { image: humo, variant: 'dark' }
      : { image: nubes, variant: 'light' };
  return <VisualLayer {...config} />;
};

export default HeroVisual;
