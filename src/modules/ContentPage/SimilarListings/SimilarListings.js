import { ProductCard } from 'components/ProductCard/ProductCard';
import { Title } from 'components/Title/Title';
import { CardsWrapper, Wrapper } from './SimilarListings.styled';

export const SimilarListings = ({ items }) => {
  return (
    <Wrapper>
      <Title>Similar Listings</Title>
      <CardsWrapper>
        {items.map(item => (
          <li key={item.id}>
            <ProductCard card={item} />
          </li>
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};
