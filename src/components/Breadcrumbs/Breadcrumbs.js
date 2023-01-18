import Arrow from 'svg/arrow.svg';
import { Text, Wrapper } from './Breadcrumbs.styled';

export const Breadcrumbs = () => {
  return (
    <Wrapper>
      <Text>Ontario</Text>
      <img src={Arrow} alt="" width="16" />
      <Text>Toronto</Text>
      <img src={Arrow} alt="" width="16" />
      <Text style={{ color: '#9499A8' }}>22 Sunset Beach Rd</Text>
    </Wrapper>
  );
};
