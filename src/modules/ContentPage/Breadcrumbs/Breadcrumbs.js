import { Crumb } from 'components/Crumb/Crumb';
import { ChevronRight } from 'components/Icons/ChevronRight';
import { Wrapper } from './Breadcrumbs.styled';

export const Breadcrumbs = () => {
  return (
    <Wrapper>
      <Crumb>Ontario</Crumb>
      <ChevronRight />
      <Crumb>Toronto</Crumb>
      <ChevronRight />
      <Crumb endPoint>22 Sunset Beach Rd</Crumb>
    </Wrapper>
  );
};
