import {
  Adress,
  Button,
  CardsWrapper,
  DescrItem,
  DescrWrapper,
  Listed,
  Number,
  Price,
  PriceWrapper,
  ProductCard,
  Sqrt,
  Title,
  Wrapper,
} from './SimilarListings.styled';
import { items } from 'modules/ContentPage/SimilarListings/ProductCardItems';

export const SimilarListings = () => {
  return (
    <Wrapper>
      <Title>Similar Listings</Title>
      <CardsWrapper>
        {items.map(item => (
          <ProductCard key={item.id}>
            <Button>10 wishes matched</Button>
            <img
              srcSet={`${process.env.PUBLIC_URL + item.img.x1} 1x, ${
                process.env.PUBLIC_URL + item.img.x2
              } 2x`}
              src={process.env.PUBLIC_URL + item.img.x1}
              alt={item.img.alt}
            />
            <PriceWrapper>
              <Price>{item.price}</Price>
              <Listed>{item.listed}</Listed>
            </PriceWrapper>
            <DescrWrapper>
              {item.details.map(({ id, svg, text }) => (
                <DescrItem key={id}>
                  <>{svg}</>
                  <p>{text}</p>
                </DescrItem>
              ))}
            </DescrWrapper>
            <Adress>{item.adress}</Adress>
            <Number>{item.number}</Number>
            <Sqrt>{item.sqrt}</Sqrt>
          </ProductCard>
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};
