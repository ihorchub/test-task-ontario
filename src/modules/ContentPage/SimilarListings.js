import styled from 'styled-components';
import ProductCard from 'components/ProductCard/ProductCard';
import Title from 'components/Title/Title';

const SimilarListings = ({ items }) => {
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

const Wrapper = styled.div`
  margin-top: 96px;
`;

const CardsWrapper = styled.ul`
  margin-top: 18px;
  display: flex;
  gap: 31px;
`;

export default SimilarListings;
