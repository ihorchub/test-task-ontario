import Button from 'components/Button/Button';
import { ParametersCollection } from 'components/ParametersCollection/ParametersCollection';
import {
  Address,
  AddressWrapper,
  ButtonPosition,
  CardWrapper,
  Listed,
  Accent,
  Price,
  PriceWrapper,
} from './ProductCard.styled';

export const ProductCard = ({
  card: { img, price, listed, details, adress, number, sqrt },
}) => {
  return (
    <CardWrapper>
      <ButtonPosition>
        <Button width="169px">10 wishes matched</Button>
      </ButtonPosition>
      <img
        srcSet={`${process.env.PUBLIC_URL + img.x1} 1x, ${
          process.env.PUBLIC_URL + img.x2
        } 2x`}
        src={process.env.PUBLIC_URL + img.x1}
        alt={img.alt}
      />
      <PriceWrapper>
        <Price>{price}</Price>
        <Listed>{listed}</Listed>
      </PriceWrapper>
      <ParametersCollection card collection={details} />
      <AddressWrapper>
        <Address>{adress}</Address>
        <Accent>{number}</Accent>
      </AddressWrapper>

      <Accent>{sqrt}</Accent>
    </CardWrapper>
  );
};
