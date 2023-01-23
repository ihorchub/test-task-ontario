import { ButtonMedium } from 'components/ButtonMedium/ButtonMedium';
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

export const ProductCard = ({ card }) => {
  return (
    <CardWrapper>
      <ButtonPosition>
        <ButtonMedium width="169px">10 wishes matched</ButtonMedium>
      </ButtonPosition>
      <img
        srcSet={`${process.env.PUBLIC_URL + card.img.x1} 1x, ${
          process.env.PUBLIC_URL + card.img.x2
        } 2x`}
        src={process.env.PUBLIC_URL + card.img.x1}
        alt={card.img.alt}
      />
      <PriceWrapper>
        <Price>{card.price}</Price>
        <Listed>{card.listed}</Listed>
      </PriceWrapper>
      <ParametersCollection card collection={card.details} />
      <AddressWrapper>
        <Address>{card.adress}</Address>
        <Accent>{card.number}</Accent>
      </AddressWrapper>

      <Accent>{card.sqrt}</Accent>
    </CardWrapper>
  );
};
