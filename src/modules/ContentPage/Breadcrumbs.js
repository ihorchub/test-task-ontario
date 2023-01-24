import styled from 'styled-components';
import Crumb from 'components/Crumb/Crumb';
import { ChevronRight } from 'components/Icons/Icons';

const Breadcrumbs = () => {
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default Breadcrumbs;
