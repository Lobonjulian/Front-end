import {
  Marte,
  MarteLight,
  SaturnoDark,
  SaturnoLight,
  Jupiter,
  JupiterLight,
} from '@assets/image/imageData';

export const planets = {
  marte: {
    slug: 'marte',
    name: 'Marte',
    description:
      'Marte es el cuarto planeta del sistema solar y es conocido como el planeta rojo.',
    stats: [
      { label: 'Gravedad', value: '3.7 m/s^2' },
      { label: 'Distancia al Sol', value: '227,9 millones km' },
      { label: 'Período orbital', value: '687 días' },
      { label: 'Radio', value: '3,389 km' },
      { label: 'Masa', value: '6,39 x 10^23 kg' },
    ],
    visual: {
      layers: {
        dark: Marte,
        light: MarteLight,
      },
    },
  },
  jupiter: {
    slug: 'jupiter',
    name: 'Jupiter',
    description: 'Jupiter es el planeta mas grande del sistema solar',
    stats: [
      { label: 'Gravedad', value: '24.79 m/s^2' },
      { label: 'Distancia al Sol', value: '778,5 millones km' },
      { label: 'Período orbital', value: '4331 días' },
      { label: 'Radio', value: '69,911 km' },
      { label: 'Masa', value: '1,898 x 10^27 kg' },
    ],
    visual: {
      layers: {
        dark: Jupiter,
        light: JupiterLight,
      },
    },
  },
  saturno: {
    slug: 'saturno',
    name: 'Saturno',
    description:
      'Saturno es el sexto planeta del sistema solar y es conocido como el planeta amarillo.',
    stats: [
      { label: 'Gravedad', value: '10.44 m/s^2' },
      { label: 'Distancia al Sol', value: '1.4 billones km' },
      { label: 'Período orbital', value: '10759 días' },
      { label: 'Radio', value: '58,232 km' },
      { label: 'Masa', value: '5,683 x 10^26 kg' },
    ],
    visual: {
      layers: {
        dark: SaturnoDark,
        light: SaturnoLight,
      },
    },
  },
};
