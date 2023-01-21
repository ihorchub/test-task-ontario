import { ChevronRight } from 'components/Icons/ChevronRight';
import { Text, Wrapper } from './Breadcrumbs.styled';

export const Breadcrumbs = () => {
  return (
    <Wrapper>
      <Text>Ontario</Text>
      <ChevronRight />
      <Text>Toronto</Text>
      <ChevronRight />
      <Text style={{ color: '#9499A8' }}>22 Sunset Beach Rd</Text>
    </Wrapper>
  );
};
