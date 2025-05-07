import { ForceInfo } from '../types';
import { Anchor, Shield, Plane } from 'lucide-react';

export const forces: ForceInfo[] = [
  {
    id: 'army',
    name: 'Pakistan Army',
    motto: 'Iman, Taqwa, Jihad fi Sabilillah',
    description: 'The guardians of our land borders, the Pakistan Army stands as a symbol of national pride and resilience. With unwavering commitment to peace and security, they protect our homeland with honor and dignity.',
    icon: 'Shield',
    quote: 'In unity lies our strength, in peace lies our victory. The Pakistan Army stands firm in protecting our nation\'s dignity.'
  },
  {
    id: 'navy',
    name: 'Pakistan Navy',
    motto: 'Himmat-o-Istehkam',
    description: 'Defenders of our maritime boundaries, the Pakistan Navy ensures the safety of our waters with courage and determination. Their vigilance and dedication safeguard our coastal regions and protect our maritime interests.',
    icon: 'Anchor',
    quote: 'Like the vast oceans we guard, our commitment to peace runs deep. The Pakistan Navy: Guardians of maritime harmony.'
  },
  {
    id: 'airforce',
    name: 'Pakistan Air Force',
    motto: 'Faith, Unity, Discipline',
    description: 'Soaring through the skies with excellence and valor, the Pakistan Air Force defends our airspace with precision and skill. Their commitment to protecting our nation from above inspires us all.',
    icon: 'Plane',
    quote: 'We soar not to dominate the skies, but to protect the peace below. Pakistan Air Force: Wings of tranquility.'
  }
];

export const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Shield':
      return Shield;
    case 'Anchor':
      return Anchor;
    case 'Plane':
      return Plane;
    default:
      return Shield;
  }
};