import { Button, Number, Price, Wrapper } from './HousePrice.styled';

export const HousePrice = () => {
  return (
    <Wrapper>
      <Number>MLS: N5846678</Number>
      <Price>$1,688,000</Price>
      <Button type="button">Buy this </Button>
    </Wrapper>
  );
};
