import { Auto } from 'components/Svg/Auto';
import { Bathroom } from 'components/Svg/Bathroom';
import { Bedroom } from 'components/Svg/Bedroom';
import { Building } from 'components/Svg/Building';
import { Kitchen } from 'components/Svg/Kitchen';
import house from 'images/house.jpg';
import x2house from 'images/2xhouse.jpg';

export const items = [
  {
    id: '1',
    img: { x1: house, x2: x2house, alt: '' },
    price: '$629,000',
    listed: 'Listed 2 days ago',
    details: [
      { id: '1', svg: <Bedroom />, text: '4' },
      { id: '2', svg: <Bathroom />, text: '1' },
      { id: '3', svg: <Kitchen />, text: '1' },
      { id: '4', svg: <Auto />, text: '4' },
      { id: '5', svg: <Building />, text: 'Semi-Detached' },
    ],
    adress: 'York, South Richvale, Near Yonge And Oak',
    number: '69 Oak Ave',
    sqrt: '3000-3500 sqft • 19.98 x 100.4 ft',
  },
  {
    id: '2',
    img: { x1: house, x2: x2house, alt: '' },
    price: '$629,000',
    listed: 'Listed 2 days ago',
    details: [
      { id: '1', svg: <Bedroom />, text: '4' },
      { id: '2', svg: <Bathroom />, text: '1' },
      { id: '3', svg: <Kitchen />, text: '1' },
      { id: '4', svg: <Auto />, text: '4' },
      { id: '5', svg: <Building />, text: 'Semi-Detached' },
    ],
    adress: 'York, South Richvale, Near Yonge And Oak',
    number: '69 Oak Ave',
    sqrt: '3000-3500 sqft • 19.98 x 100.4 ft',
  },
];
