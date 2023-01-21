import { HouseDescription } from '../HouseDescription/HouseDescription';
import { HousePrice } from '../HousePrice/HousePrice';
import { Wrapper } from './InDetail.styled';

export const InDetail = () => {
  return (
    <Wrapper>
      <HouseDescription />
      <HousePrice />
    </Wrapper>
  );
};
