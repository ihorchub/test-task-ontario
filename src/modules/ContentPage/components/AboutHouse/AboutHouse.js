import { Gallery } from '../Gallery/Gallery';
import { InDetail } from '../InDetail/InDetail';
import { Wrapper } from './AboutHouse.styled';

export const AboutHouse = () => {
  return (
    <Wrapper>
      <Gallery />
      <InDetail />
    </Wrapper>
  );
};
