import { Auto } from 'components/Svg/Auto';
import { Bathroom } from 'components/Svg/Bathroom';
import { Bedroom } from 'components/Svg/Bedroom';
import { Building } from 'components/Svg/Building';
import { Kitchen } from 'components/Svg/Kitchen';
import { Size } from 'components/Svg/Size';

export const parameters = [
  { id: '1', svg: <Bedroom />, text: '4' },
  { id: '2', svg: <Bathroom />, text: '3+1' },
  { id: '3', svg: <Kitchen />, text: '1' },
  { id: '4', svg: <Auto />, text: '2' },
  { id: '5', svg: <Size />, text: '19.98 x 100.4 ft' },
  { id: '6', svg: <Size />, text: '2500-3500 sqft' },
  { id: '7', svg: <Building />, text: 'Semi-Detached' },
];
